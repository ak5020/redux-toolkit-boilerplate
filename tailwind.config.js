// /** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.gray,
      },
      width: {
        690: "690px",
        266: "266px",
        206: "206px",
        140: "140px",
      },
      height: {
        592: "592px",
      },
      margin: {
        50: "50px",
      },
      padding: {
        53: "53px",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "4xl": "2180px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [require("flowbite/plugin")],
};
