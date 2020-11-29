const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

const plugins = [
  // require("postcss-import"),
  require("tailwindcss"),
  postcssPresetEnv(),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(cssnano());
}

module.exports = { plugins };
