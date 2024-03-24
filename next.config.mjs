/** @type {import('next').NextConfig} */
const nextConfig = {
    /**
     * Enable static exports for the App Router.
     * 
     */
    output: "export",

    /**
     * Disable server-based image optimization. Next.Js does not support dynamic features with static exports.
     */
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
