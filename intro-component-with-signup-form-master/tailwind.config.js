/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        Red: 'hsl(0, 100%, 74%) ',
        Green: 'hsl(154, 59%, 51%)',
        Blue: 'hsl(248, 32%, 49%)',
        darkBlue: 'hsl(249, 10%, 26%) ',
        grayishBlue: 'hsl(246, 25%, 77%)',
      }
    },
  },
  plugins: [],
}

