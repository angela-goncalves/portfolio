module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["Dancing Script, cursive"],
      subtitle: ["Otomanopee One, sans-serif"],
      paragraph: ["Zen Loop, cursive"],
      description: ["Source Sans Pro, sans-serif"],
    },
    textColor: {
      nav: "#A03C78",
      h1: "#ED8E7C",
      h1hover: "#CDF3A2",
      subtitle: "#850C5C",
      subsubtitle: "#ED8E7C",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      nav: "#FFFF",
      card: "#F1ECC3",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      card: "#93D9A3",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
