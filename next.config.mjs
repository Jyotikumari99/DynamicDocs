/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.alias.encoding = false;
        return config;
    },
    images: {
        domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
    },
};

export default nextConfig;
