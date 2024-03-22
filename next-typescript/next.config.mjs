/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cloudflare-ipfs.com",
      },
    ],
  },
};

export default nextConfig;
