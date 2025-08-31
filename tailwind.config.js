const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'default': '#F2F2F4',
        'primary': '#2E2E2E',
      },
    },
    keyframes: {
      bounceY: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(10px)' },
      },
    },
    animation: {
      bounceY: 'bounceY 1s infinite',
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}