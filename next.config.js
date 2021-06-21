module.exports = {
  reactStrictMode: true,
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
