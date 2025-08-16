/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <-- importante para ativar dark mode via classe
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // aponta para todos os arquivos React
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  