const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === "production" &&
    purgecss({
      content: ["./src/**/*.js"],
      css: ["./src/**/*.css"]
    }),
    require("autoprefixer")
  ]
};
