/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://picsum.photos/200/300')",
        "footer-texture": "url('https://picsum.photos/200')",
      },
    },
  },
  plugins: [require("daisyui")],
};
