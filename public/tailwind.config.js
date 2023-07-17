/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../public/index.html',
        '../**/*.{html,js}',
        '../**/*.js',
        '~/node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'sans-serif']
            },
            colors: {
                'bee-yellow': '#e8a917',
                'black': '#000000'

            }
        },
    },
    plugins: [require('flowbite/plugin')],
}