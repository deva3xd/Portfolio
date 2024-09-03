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
        'custom-primary': '#15161D',
        'custom-secondary': '#0DFF00'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}