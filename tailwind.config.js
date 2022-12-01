/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        radiateSmall: {
          '0%': { boxShadow: '0 0 0 0px #FFDE0080, 0 0 0 5px #FFDE0080, 0 0 0 10px #FFDE0040, 0 0 0 15px #FFDE0020, 0 0 0 20px #FFDE0010, 0 0 40px 50px #FFDE0010;' },
          '100%': { boxShadow: '0 0 0 5px #FFDE0080, 0 0 0 10px #FFDE0040, 0 0 0 15px #FFDE0020, 0 0 0 20px #FFDE0010, 0 0 0 25px #FFDE0000, 0 0 40px 50px #FFDE0010;' },
        },
        radiateMedium: {
          '0%': { boxShadow: '0 0 0 0px #FF940080, 0 0 0 5px #FF940080, 0 0 0 10px #FF940040, 0 0 0 15px #FF940020, 0 0 0 20px #FF940010, 0 0 40px 50px #FF940010;' },
          '100%': { boxShadow: '0 0 0 5px #FF940080, 0 0 0 10px #FF940040, 0 0 0 15px #FF940020, 0 0 0 20px #FF940010, 0 0 0 25px #FF940000, 0 0 40px 50px #FF940010;' },
        },
        radiateLarge: {
          '0%': { boxShadow: '0 0 0 0px #FF1e0080, 0 0 0 5px #FF1e0080, 0 0 0 10px #FF1e0040, 0 0 0 15px #FF1E0020, 0 0 0 20px #FF1E0010, 0 0 40px 50px #FF1E0010;' },
          '100%': { boxShadow: '0 0 0 5px #FF1e0080, 0 0 0 10px #FF1e0040, 0 0 0 15px #FF1e0020, 0 0 0 20px #FF1E0010, 0 0 0 25px #FF1E0000, 0 0 40px 50px #FF1E0010;' },
        },
        flow: {
          '0%': { opacity: 0, transform: 'translateY(300%)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(-300%)' },
        },
        flow2: {
          '0%': { opacity: 0, transform: 'translateY(600%)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(-600%)' },
        },
        flow3: {
          '0%': { opacity: 0, transform: 'translateY(1000%)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0, transform: 'translateY(-1000%)' },
        },
      },
      animation: {
        'radiateSmall': 'radiateSmall 2s linear infinite',
        'radiateMedium': 'radiateMedium 2s linear infinite',
        'radiateLarge': 'radiateLarge 2s linear infinite',
        'flow': 'flow 2s linear infinite',
        'flow2': 'flow2 3s linear infinite',
        'flow3': 'flow3 2s linear infinite',
      },
      boxShadow: {
        'sun-small': '0 0 0 5px #ffde0080, 0 0 0 10px #ffde0040, 0 0 0 15px #ffde0020, 0 0 0 20px #ffde0010, 0 0 0 25px #ffde0000, 0 0 40px 50px #ffde0010',
        'sun-medium': '0 0 0 5px #ff940080, 0 0 0 10px #ff940040, 0 0 0 15px #ff940020, 0 0 0 20px #ff940010, 0 0 0 25px #ff940000, 0 0 40px 50px #ff940010',
        'sun-large': '0 0 0 5px #ff1e0080, 0 0 0 10px #ff1e0040, 0 0 0 15px #ff1e0020, 0 0 0 20px #ff1e0010, 0 0 0 25px #ff1e0000, 0 0 40px 50px #ff1e0010',
      }
    },
  },
  plugins: [
    require("tailwindcss-radix")({
      // Default: `radix`
      variantPrefix: "rdx",
    }),
    require("tailwindcss-animation-delay"),
  ],
}
