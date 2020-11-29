module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    // "@snowpack/plugin-webpack",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-optimize",
  ],
  buildOptions: {
    clean: true,
  },
};
