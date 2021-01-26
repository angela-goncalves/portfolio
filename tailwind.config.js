module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Dancing Script, cursive'],
      'subtitle': ['Overlock, cursive'],
      'paragraph': ['Lateef, cursive'],
    },
    textColor: {
      'nav': '#EC8A73',
      'navhover':'#995461',
      'h1':'#7C9952',
      'h1hover': '#E5DEBF',
      'strong': '#BDC065',
      'subtitle':'#995461',
      'subsubtitle':'#BDC065',
    },
    backgroundColor: theme => ({
      'nav': '#F2F2F2',
     })
  },
  variants: {
    extend: {},
  },
  plugins: []
}
