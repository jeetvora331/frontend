const path = require('path');
const colors = require('tailwindcss/colors');
const {
    fontFamily: { sans },
} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [path.join(__dirname, 'src/**/*.(jsx|tsx)')],
    theme: {
        extend: {
            colors: {
                brand: colors.indigo,
                offwhite: 'rgb(236 240 243 / <alpha-value>)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@headlessui/tailwindcss'),
        require('tailwindcss-debug-screens'),
    ],
};
