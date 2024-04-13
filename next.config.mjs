/** @type {import('next').NextConfig} */


const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL
    },
    images: {
        domains: [
            process.env.BASE_URL
        ]
    },
    reactStrictMode: false
}

export default nextConfig