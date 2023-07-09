/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sora: '"Sora", "sans-serif"',
      dmSans: '"DM Sans", "sans-serif"',
    },
    extend: {
      colors: {
        background: "#FFF9F5",
        brown: "#190807",
        primary: "#FF5045",
        text: "#645C5B",
        title: "#190807",
        footer: "#D1CAC9",
        fIcon: "#4D3A39",
      },
    },
    backgroundImage: {
      hero: "url(../img/banner.jpg)",
    },
    screens: {
      xsm: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
