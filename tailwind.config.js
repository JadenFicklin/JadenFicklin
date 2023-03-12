/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '290px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        fontFamily: {
            poppins: ['Poppins', 'sans-serif']
        },
        extend: {
            colors: {
                primary: '#F9F7F2',
                secondary: '#646464',
                tertiary: '#373737',
                blue: '#2F4955'
            }
        }
    },
    plugins: []
};
