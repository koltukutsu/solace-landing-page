/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "assets.aceternity.com", "flutter-example-webapp.vercel.app", "pbs.twimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
