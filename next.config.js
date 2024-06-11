module.exports = {
  async rewrites() {
    return [{ source: "/custom-api/:path*", destination: "/api/:path*" }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          {
            key: "Surrogate-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["bubbls3.s3.ap-south-1.amazonaws.com"],
  },
};
