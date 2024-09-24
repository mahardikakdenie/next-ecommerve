/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.ibb.co.com",
            },
            {
                hostname: "cdn.myanimelist.net",
            },
            {
                hostname: "api.jikan.moe",
            },
        ],
    }
};

export default nextConfig;
