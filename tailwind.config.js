module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  // purge: ["./src/**/*.html", "./public/**/*.html"],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html"],
    mode: "all",
    preserveHtmlElements: false,
  },
};
