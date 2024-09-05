/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'inside.lumiereaestheticsga.com',
            pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'i0.wp.com',
          pathname: '**',
        },
    ]
  },
  compiler: {
    styledComponents: true
  },
}


module.exports = nextConfig
