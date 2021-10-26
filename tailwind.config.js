module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      asap: ["Asap, sans-serif"],
    },
    textColor: (theme) => ({
      ...theme("colors"),
      darkPurple: "#311643",
      darkPink: "#A63D4C",
    }),
    boxShadow: {
      box: "0px 4px 6px 0px #00000040",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      pink2: "#FFC7CF",
      darkblue: "#345881",
      lightPink: "#F6DEE1",
      blue: "#6991BE",
      darkPink: "#A63D4C",
      midPurple: "#604E6C",
    }),
    backgroundImage: {
      cardLightBlue: "url('/cardLightBlue.jpg')",
      cardLightPink: "url('/cardLightPink.jpg')",
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
