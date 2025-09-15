const securityHeaders = [
  {
    key: 'X-Robots-Tag',
    value: 'noimageindex, noarchive, nosnippet',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Permissions-Policy',
    value: 'interest-cohort=()',
  },
  {
    key: 'User-Agent',
    value: 'facebookexternalhit', // example, see note below
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
