import type { NextConfig } from "next";

// Static export for GitHub Pages. The site is served from a project page at
// /resume, so assets need that prefix. Set BASE_PATH to "" to serve from root
// (a user page, or any other host).
const basePath = process.env.BASE_PATH ?? "/resume";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // GitHub Pages has no image optimizer.
  images: { unoptimized: true },
  // Serve /resume/ as a directory with index.html rather than /resume.html.
  trailingSlash: true,
};

export default nextConfig;
