/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "mly-custom": "835px",
    },
    extend: {
      colors: {
        "bright-blue": "#47B5FF",
        "medium-blue": "#1363DF",
      },
    },
  },
  plugins: [],
};
