/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/assets/images/partner-with-us.png')",
      },
      width: {
        '108': '37.5rem',
      },
      height: {
        '128': '316px',
      }
    },
    // fontSize: {
    //   'partner-hero': ['64px', {
    //     lineHeight: '68px',
    //     fontWeight: '600'
    //   }],
    //   'why-partner': ['48px', {
    //     lineHeight: '93.5px',
    //     fontWeight: '600'
    //   }],
    //   'partner-content': ['24px', {
    //     lineHeight: '46.75px',
    //     fontWeight: '400'
    //   }],
    // }
  },
  plugins: [],
}
