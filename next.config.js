module.exports = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/exchanges",
        permanent: true,
      },
    ];
  },
};
