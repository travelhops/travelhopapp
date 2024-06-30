/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            zIndex: {
                '-1':'-1'
            }
        },
        fontFamily: {
            'arial' : ['Arial'],
            'qwigley' : ['Qwigley', 'cursive'],
            'poppins' : ['Poppins', 'sans-serif'],
            'roboto' :  ['Roboto', 'sans-serif'],
            'playwrite' : ['Playwrite ES', 'cursive'],
            'poppins' : ['Poppins', 'sans-serif']
        }
    },
    plugins: [
         plugin(function({ addUtilities }) {
              addUtilities({
                  '.hideScrollbar': {
                      'ms-overflow-style': 'none',
                      'scrollbar-width': 'none'
                  }
              })
        })
    ],
}

