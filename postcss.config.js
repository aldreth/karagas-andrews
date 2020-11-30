const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");

const plugins = [
  postcssImport({ path: "src" }),
  require("tailwindcss"),
  postcssPresetEnv(),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(cssnano());
}

module.exports = { plugins };
