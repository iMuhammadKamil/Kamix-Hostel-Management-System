const { execSync } = require("child_process");

if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL = "file:./dev.db";
}

try {
  execSync("npx prisma generate", { stdio: "inherit", env: process.env });
} catch (error) {
  console.error("Prisma generate error:", error);
  process.exit(1);
}
