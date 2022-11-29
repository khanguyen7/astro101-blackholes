/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        radiate: {
          '0%': { boxShadow: '0 0 0 0px #FFDE0080, 0 0 0 5px #FFDE0080, 0 0 0 10px #FFDE0040, 0 0 0 15px #FFDE0020, 0 0 0 20px #FFDE0010, 0 0 40px 50px #FFDE0010;' },
          '100%': { boxShadow: '0 0 0 5px #FFDE0080, 0 0 0 10px #FFDE0040, 0 0 0 15px #FFDE0020, 0 0 0 20px #FFDE0010, 0 0 0 25px #FFDE0000, 0 0 40px 50px #FFDE0010;' },
        },
        squiggle: {
          '0%, 100%': { borderRadius: '0% 100% 0% 100%' },
          '50%': { borderRadius: '100% 0% 100% 0%'},
        }
      },
      animation: {
        'radiate': 'radiate 2s linear infinite',
        'squiggle': 'squiggle 2s linear infinite',
      },
      boxShadow: {
        'sun': '0 0 0 5px #ffde0080, 0 0 0 10px #ffde0040, 0 0 0 15px #ffde0020, 0 0 0 20px #ffde0010, 0 0 0 25px #ffde0000, 0 0 40px 50px #ffde0010'
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")({
      // Default: `radix`
      variantPrefix: "rdx",
    })
  ],
}
