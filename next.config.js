module.exports = {
  async headers() {
    return [
      {
        source: '/images/(.*)',   // adjust to your image folder
        headers: [
          { key: 'X-Robots-Tag', value: 'noimageindex' },
        ],
      },
    ]
  },
}
