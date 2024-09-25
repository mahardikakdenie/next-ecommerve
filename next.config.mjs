/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.ibb.co.com",
            },
            {
                hostname: "encrypted-tbn0.gstatic.com",
            },
            {
                hostname: "api.jikan.moe",
            },
        ],
    }
};

export default nextConfig;
