/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
