/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
    },
    images: {
        remotePatterns: [
            {
                hostname: 'parsefiles.back4app.com',
                protocol: 'https'
            },
            {
                hostname: 'img.freepik.com',
                protocol: 'https'
            }
        ]
    },
};

export default nextConfig;
