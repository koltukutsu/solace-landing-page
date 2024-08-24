const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
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
  experimental: {
    serverActions: true,
  },
  env: {
    _next_intl_trailing_slash: "", // Add this to resolve the warning
  },
};

module.exports = withNextIntl(nextConfig);
