/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  eslint: {
    ignoreDurinBuilds:true,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname :'picsum.photos'
      }
    ]
  }
  
};

export default nextConfig;
