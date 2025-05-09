import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/time",
          destination:
            "https://time-diff-visualizer-kolbeyangs-projects.vercel.app/",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
