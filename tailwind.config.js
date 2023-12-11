const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "orbitron": "'Orbitron', sans-serif",
        "robot": "'Silkscreen', sans-serif",
        "ubuntu": "'Ubuntu', sans-serif",
        "font-rubik": "'Rubik', sans-serif",
        "font-ubuntu": "'Ubuntu', sans-serif"
      }
    },
  },
  plugins: [nextui(), require("daisyui")],
}

