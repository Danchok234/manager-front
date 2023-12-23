/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ["localhost"],
  },
  env: {
    BACKEND_URL: "http://localhost:4444",
    NEXTAUTH_URL:"http://localhost:3000",
  },
  // async rewrites(){
  //   return [
  //     {
  //       source:"/auth/:path",
  //       destination:"http://localhost:4444/auth/:path"
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
