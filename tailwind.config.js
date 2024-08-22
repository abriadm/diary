/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prequel: ['prequel', 'sans-serif'],
        balsamiq: ['balsamiq', 'sans-serif'],
        palmCanyon: ['palmCanyon', 'sans-serif'],
        helvetica: ['helvetica', 'sans-serif'],
        sfMono: ['sf-mono', 'sans-serif']
      }
    },
  },
  plugins: [],
};
