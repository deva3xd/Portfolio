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
        'custom-secondary': '#0DFF00',
        'custom-tertiary': '#12131A'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ]
}