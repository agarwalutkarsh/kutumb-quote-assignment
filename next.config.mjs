/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.crafto.app',
            port: '',
            pathname: '/*/**',
          },
        ],
      }
};

export default nextConfig;
