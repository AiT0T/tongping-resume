/** @type {import('next').NextConfig} */
const nextConfig = {
  // 部署时忽略 ESLint 报错（本地开发不受影响）
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
