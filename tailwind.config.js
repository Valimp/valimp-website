/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage :{
        'home' : "url('/img/home.jpg')",
      },
      colors: {
        'grey': '#292F36',
        'lightGrey': '#586574',
        'cyan': '#4ECDC4',
        'white': '#F7FFF7',
        'coral': '#FF6B6B',
        'yellow': '#FFE66D'
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
