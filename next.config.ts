import type { NextConfig } from "next";

const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isCI ? "/portfolio" : "",
  assetPrefix: isCI ? "/portfolio/" : "",
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isCI ? "/portfolio" : "",
  },
};

export default nextConfig;
