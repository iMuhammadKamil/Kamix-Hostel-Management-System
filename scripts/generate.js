const { execSync } = require("child_process");

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/kamix_hms?schema=public";
}

try {
  execSync("npx prisma generate", { stdio: "inherit", env: process.env });
} catch (error) {
  console.error("Prisma generate error:", error);
  process.exit(1);
}

