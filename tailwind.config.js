/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'bgcolor':'#f9fafb',
      'light-gray':'#f9fafb',
      'text-color':'#101828',
      'grey-text': '#667085',
      'dark-grey': '#667085',
      'white': '#ffffff',
      'dark-text-grey': '#344054',
      'deep-grey':'#667085',
      'header-text': '#344054',
      'purple-color': '#6941c6',
      'light-purple-color': '#b29de2',
      'green': '#ECFDF3',
      'primary': '#7F56D9',
      'blur-white': 'rgba(255, 255, 255, 0.8)'
  },
  fontFamily: {
    'inter': ['Inter'],
  },
  boxShadow: {
    '3xl': '0px 1px 2px rgba(16, 24, 40, 0.05)',
  },
  gridTemplateColumns: {
    'container': '22% 88%;',
    'body-section': '30% 70%;'
  }
  },
  plugins: [require("@tailwindcss/forms")],
}
