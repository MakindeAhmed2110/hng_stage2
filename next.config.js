/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TMDB_API_KEY: process.env.TMDB_API_KEY,
      },
      images: {
        domains: ['image.tmdb.org'],
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      }
}

module.exports = nextConfig
