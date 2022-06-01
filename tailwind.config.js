module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "monster-layout": "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
    colors: {
      "languid-lavender": "#D0C4DF",
      "bright-lilac": "#C792DF",
      "gains-boro": "#DDDDDF",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
