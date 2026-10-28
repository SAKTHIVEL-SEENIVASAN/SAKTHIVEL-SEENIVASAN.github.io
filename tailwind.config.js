/** @type {import('tailwindcss').Config} */
// Same Tailwind version (3.4.17) and default theme the page used through the Play CDN.
// Every class in index.html, including class names inside its inline scripts, is picked up from content.
module.exports = {
  content: ['./index.html'],
  theme: { extend: {} },
  plugins: [],
};
