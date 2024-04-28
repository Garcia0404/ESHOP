/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayMain': '#434145',
        'blueMain': '#4670ff',
        'colorMain':'#19181A',
      },
      screens: {
        'mobile': '350px',
        'mobileMd':'450px',
        'mobileLg': '550px',
        'tabletsm': '650px',
        'tablet': '820px',
        'lg':'1000px',
      },
      gridTemplateColumns:{
        'main':'repeat(auto-fill,minmax(250px,1fr))'
      }
    },
  },
  plugins: [],
}