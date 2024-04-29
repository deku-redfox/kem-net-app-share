/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        'color-primary': 'rgb(0, 63, 99)',
        'color-primary-light': 'rgb(2, 87, 136)',
        'color-secondary': 'rgb(242, 177, 56)',
        'color-tertiary': 'rgb(242, 246, 247)',
        'color-error': 'rgb(238, 67, 63)',
        'skeleton': 'rgba(54, 54, 54, 0.205)',
        'color-grey-soft': '#F5F5F5',
        'color-iron': '#52525c',
      }
    },
  },
  plugins: [],
};
