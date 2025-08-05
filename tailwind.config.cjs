/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}"],
  darkMode: "class", // penting untuk toggle .dark via JS
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui"],
        body: ["ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
