import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/dashboard/**/*": ["./prisma/dev.db"],
    "/api/**/*": ["./prisma/dev.db"],
  },
};

export default nextConfig;
