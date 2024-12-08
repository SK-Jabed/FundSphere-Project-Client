// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
//   theme: {
//     extend: {},
//   },
  //  plugins: [
  //   require('daisyui'),
  // ],
// }


module.exports = {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // Ensure all relevant files are scanned
  theme: {
    extend: {}, // Add custom styles here if needed
  },
     plugins: [
    require('daisyui'),
  ],
};

