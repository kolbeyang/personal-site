import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/habits/:path*",
        destination: "https://habit-tracker-eight-eta.vercel.app/:path*",
      },
      {
        source: "/time/:path*",
        destination:
          "https://time-diff-visualizer-git-main-kolbeyangs-projects.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
