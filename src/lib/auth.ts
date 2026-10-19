import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";
import { prisma } from "./prisma";
import { UserRole } from "./constants";

const SESSION_COOKIE_NAME = "hms_session_token";
const SESSION_EXPIRY_DAYS = 7;
const SESSION_SECRET = process.env.SESSION_SECRET || "hms-secure-development-secret-key-2026";

function signToken(data: string): string {
  const hmac = crypto.createHmac("sha256", SESSION_SECRET);
  hmac.update(data);
  const signature = hmac.digest("hex");
  return `${data}.${signature}`;
}

function verifyToken(signedToken: string): string | null {
  const lastDot = signedToken.lastIndexOf(".");
  if (lastDot === -1) return null;
  const data = signedToken.slice(0, lastDot);
  const signature = signedToken.slice(lastDot + 1);

  const hmac = crypto.createHmac("sha256", SESSION_SECRET);
  hmac.update(data);
  const expectedSignature = hmac.digest("hex");

  try {
    const b1 = Buffer.from(signature, "hex");
    const b2 = Buffer.from(expectedSignature, "hex");
    if (b1.length !== b2.length) return null;
    if (crypto.timingSafeEqual(b1, b2)) {
      return data;
    }
  } catch {
    return null;
  }
  return null;
}

export async function hashPassword(plainText: string): Promise<string> {
  return bcrypt.hash(plainText, 10);
}

export async function verifyPassword(plainText: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plainText, hash);
}

export async function createSession(userId: string) {
  const expires = new Date();
  expires.setDate(expires.getDate() + SESSION_EXPIRY_DAYS);

  // Generate stateless signed session token that works across all Vercel serverless instances
  const payload = JSON.stringify({ userId, expires: expires.toISOString() });
  const encodedPayload = Buffer.from(payload, "utf-8").toString("base64url");
  const sessionToken = signToken(encodedPayload);

  // Also best-effort write to database Session table
  await prisma.session.create({
    data: {
      sessionToken,
      userId,
      expires,
    },
  }).catch(() => {});

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires,
    path: "/",
  });

  return sessionToken;
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!token) return null;

  let resolvedUserId: string | null = null;

  // 1. Try decoding and verifying stateless signed token
  const verifiedPayload = verifyToken(token);
  if (verifiedPayload) {
    try {
      const decodedJson = JSON.parse(Buffer.from(verifiedPayload, "base64url").toString("utf-8"));
      if (new Date(decodedJson.expires) > new Date()) {
        resolvedUserId = decodedJson.userId;
      }
    } catch {}
  }

  // 2. Fallback to database lookup if legacy token
  if (!resolvedUserId) {
    const session = await prisma.session.findUnique({
      where: { sessionToken: token },
    }).catch(() => null);

    if (session && session.expires > new Date()) {
      resolvedUserId = session.userId;
    }
  }

  if (!resolvedUserId) return null;

  const user = await prisma.user.findUnique({
    where: { id: resolvedUserId },
    include: {
      residentProfile: true,
      staffProfile: true,
    },
  });

  if (!user || !user.isActive) return null;

  return user;
}

export async function clearSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (token) {
    await prisma.session.deleteMany({
      where: { sessionToken: token },
    }).catch(() => {});
    cookieStore.delete(SESSION_COOKIE_NAME);
  }
}

export async function requireAuth(allowedRoles?: UserRole[]) {
  const user = await getSessionUser();
  if (!user) {
    redirect("/login");
  }
  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role as UserRole)) {
    redirect("/dashboard");
  }
  return user;
}
