/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
          },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
      },
};

export default nextConfig;
