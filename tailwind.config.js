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
      darkblue: "#345881",
      blue: "#6991BE",
      green: "#636F44",
      cream: "#C3863C",
      red: "#AE4147",
      pink2: "#c8777b",
      lightPink: "#F6DEE1",
      darkPink: "#A63D4C",
      midPurple: "#604E6C",
    }),
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
