const { execSync } = require("child_process");

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./dev.db";
}

console.log("--> Generating Prisma Client...");
execSync("npx prisma generate", { stdio: "inherit", env: process.env });

console.log("--> Building Next.js application...");
execSync("npx next build", { stdio: "inherit", env: process.env });
