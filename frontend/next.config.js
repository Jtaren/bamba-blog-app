// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   images: {
// 	domains: ['cdn.sanity.io'],
// 	loader: 'custom'
// }
// }


// module.exports = nextConfig

module.exports = {
  env: {
    API_URL: "https://bamba-blog.netlify.app"
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/:path*`
      }
    ];
  }
};



module.exports = {
  // ... other configuration options
  // add the following option
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/index.html': { page: '/' }
    };
  }
};
