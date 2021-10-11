module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      asap: ["Asap, sans-serif"],
    },
    textColor: (theme) => ({
      ...theme("colors"),
      darkPurple: "#311643",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      pink: "#C8777B",
      lightPink: "#DCAAB1",
      middlePink: "#C8777B",
      azul: "#345881",
      darkPink: "#A63D4C",
    }),
    backgroundImage: {
      cardLightBlue: "url('/svg/cardLightBlue.svg')",
      cardLightPink: "url('/svg/cardLightPink.svg')",
      cardDarkBlue: "url('/svg/cardDarkBlue.svg')",
      cardDarkPink: "url('/svg/cardDarkPink.svg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
