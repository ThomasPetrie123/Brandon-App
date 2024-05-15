const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/Message.jsx",
    "./src/components/Navbar.jsx",
    "./src/components/Hero.jsx",
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".btn-logo": {
            "background-color": "#faaf21",
            "border-color": "#faaf21",
          },
          ".btn-logo:hover": {
            "background-color": "#e39f1e",
            "border-color": "#e39f1e",
          }
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".btn-logo": {
            "background-color": "#01adf2",
            "border-color": "#01adf2",
          },
          ".btn-logo:hover": {
            "background-color": "#0299d6",
            "border-color": "#0299d6",
          }
        },
      },
    ],
  },
}

