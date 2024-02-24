/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '72rem'
      },
      keyframes: {
        fadeIn: {
          '0%': {
            transform: 'translateY(8rem)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },

        },
        fadeOut: {
          '0%': {
            transform: 'translateY(0)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(6rem)',
            opacity: 1,
          },

        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      }
    },
  },
  plugins: [],
}