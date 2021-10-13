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
      pink: "#F0D2D6",
      middlePink: "#C8777B",
      lightPink: "#DCAAB1",
      azul: "#345881",
      darkPink: "#A63D4C",
      midPurple: "#604E6C",
    }),
    backgroundImage: {
      cardLightBlue: "url('/svg/cardLightBlue.svg')",
      cardLightPink: "url('/svg/cardLightPink.svg')",
      cardDarkBlue: "url('/svg/cardDarkBlue.svg')",
      cardDarkPink: "url('/svg/cardDarkPink.svg')",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
      lightPink: "#DCAAB1",
      middlePink: "#C8777B",
      darkPink: "#A63D4C",
      darkPurple: "#311643",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
