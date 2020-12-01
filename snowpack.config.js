module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
    // "src/styles": "/styles",
  },
  plugins: ["@snowpack/plugin-webpack", "@snowpack/plugin-postcss"],
  buildOptions: {
    clean: true,
  },
  installOptions: {
    packageLookupFields: [],
    externalPackage: ["styles"],
  },
};
