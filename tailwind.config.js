/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': "#004852",
        'secondary': "#00b613",
        'bgPrimary': "#04684C",
        'custom-blue': '#003366',
        'custom-teal': '#006666',
        'textPrimary': '#676666',
        'textSecondary': '#6B6969'
      },
    },
  },
  plugins: [],
};
