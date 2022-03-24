/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://teknasyon.netlify.app/.netlify/functions/products',
    TOKEN: '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',
  },
  images: {
    domains: ['cdn.shopify.com/'],
  },
}

module.exports = withPlugins([[withImages]], nextConfig)
