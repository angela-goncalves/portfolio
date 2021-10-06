module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      title: ["Adamina, serif"],
      subtitle: ["Asap, sans-serif"],
    },
    textColor: {
      nav: "#850C5C",
      h1: "#7C9952",
      h1hover: "#E5DEBF",
      subtitle: "#850C5C",
      subsubtitle: "#850C5C",
    },
    backgroundColor: (theme) => ({
      nav: "#FFFF",
      card: "#E3F1E6",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
