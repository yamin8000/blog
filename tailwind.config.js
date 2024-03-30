const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {},
        colors: {
            ...colors
        }
    },
    plugins: [],
}

