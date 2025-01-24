
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      }
    ],
  },
  env: {
    GOOGLE_TRANSLATE_API_KEY: process.env.GOOGLE_TRANSLATE_API_KEY, // Add the environment variable here
  },
};

export default nextConfig;  