module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', //adaptamos o caminho para buscar do src
    './src/components/**/*.{js,ts,jsx,tsx}'//temos que criar essa pasta no nosso projeto
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}