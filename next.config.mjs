import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
    {
        hostname:"assets.aceternity.com",
        protocol: 'https',
    }
        ]
    }
};

export default nextConfig;
