/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
