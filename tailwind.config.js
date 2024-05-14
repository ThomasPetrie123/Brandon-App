const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.tsx",
    "./src/App.tsx",
    "./src/components/Message.tsx",
    "./src/components/Navbar.tsx",
    "./src/components/Hero.tsx",
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}

