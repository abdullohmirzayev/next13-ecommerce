/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com", "images.unsplash.com" ],
    hostname: "images.unsplash.com",
    protocol: "https",
    port: "",
    pathname: "/account123/**",
  },
};

module.exports = nextConfig;
