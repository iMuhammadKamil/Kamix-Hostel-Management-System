const { execSync } = require("child_process");

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/kamix_hms?schema=public";
}

console.log("--> Generating Prisma Client...");
execSync("npx prisma generate", { stdio: "inherit", env: process.env });

if (process.env.DATABASE_URL && !process.env.DATABASE_URL.includes("localhost:5432")) {
  console.log("--> Syncing schema with remote database...");
  try {
    execSync("npx prisma db push --accept-data-loss", { stdio: "inherit", env: process.env });
  } catch (err) {
    console.warn("prisma db push warning:", err.message);
  }
}

console.log("--> Building Next.js application...");
execSync("npx next build", { stdio: "inherit", env: process.env });
