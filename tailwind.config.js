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
      darkPurple: "#311643",
    },
    backgroundColor: (theme) => ({
      pink: "C8777B",
      ligthPink: "DCAAB1",
      card: "#E3F1E6",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
