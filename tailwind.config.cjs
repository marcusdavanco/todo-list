/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",

        "gray-100": "#f2f2f2",
        "gray-200": "#d9d9d9",
        "gray-300": "#808080",
        "gray-400": "#333333",
        "gray-500": "#262626",
        "gray-600": "#1a1a1a",
        "gray-700": "#0d0d0d",

        "purple-500": "#8284fa",
        "purple-700": "#5e60ce",

        "blue-500": "#4ea8de",
        "blue-700": "#1e6f9f",

        "red-500": "#e25858",
      },
      padding: {
        18: "4.5rem",
      },
      backgroundImage: {
        checkmark: `url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.43059 0.342154L4.09865 4.67409L1.61618 2.19162L0.780273 3.02753L4.09865 6.3459L9.26649 1.17806L8.43059 0.342154Z' fill='%23F2F2F2'/%3E%3C/svg%3E%0A")`,
      },
    },
  },
  plugins: [],
};
