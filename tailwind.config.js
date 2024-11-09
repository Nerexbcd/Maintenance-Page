/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.html", "./src/**/*.js"],
    theme: {
        extend: {
            borderRadius: {
            'corner': '1.5rem',
            },
            colors: {
            'bcdlab-b': '#3DFB81',
            'bcdlab-d': '#FF7245',
            'github': '#171515',
            'discord': '#5865F2',
            'overlay': 'rgba(0, 0, 0, 0.5)',
            },
            keyframes: {
                "infinite-scroll": {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                "infinite-scroll-s": "infinite-scroll 5s linear infinite",
                "infinite-scroll-m": "infinite-scroll 10s linear infinite",
                "infinite-scroll-l": "infinite-scroll 15s linear infinite",
                "infinite-scroll-xl": "infinite-scroll 20s linear infinite",
            },
        },
    },
    plugins: [
      require("daisyui"),
      require('tailwind-scrollbar-hide'),
    ],
  }