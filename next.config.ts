import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 用：静的HTMLとして出力
  output: "export",
  // リポジトリ名に合わせたベースパス
  basePath: "/medifootcare.web",
  // 静的エクスポートでは Next.js の画像最適化が使えないため無効化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
