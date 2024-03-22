/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            port: '',
// to avoid 30 minutes of dicksucking in the future, check the endpoints first
            pathname: '/img/**',
          },
        ],
      },
}

module.exports = nextConfig


// module.exports = {
//     images: {
//       formats: ['image/avif', 'image/webp'],
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'fakestoreapi.com',
//           port: '',
//           pathname: '/products/**',
//         },
//       ],
//     },
//   }

