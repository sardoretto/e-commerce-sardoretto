/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "header-shad": "0px 4px 16px rgba(75, 0, 129, 0.26)",
      },
    },
  },
  plugins: [],
};
