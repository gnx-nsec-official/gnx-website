/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['ik.imagekit.io'],
    },
    experimental: {
        serverActions: true,
    },
};