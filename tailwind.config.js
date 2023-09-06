/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                // LightTheme
                "primary-light": 'rgba(0, 177, 73, 1)',
                "primary-light-hover": 'rgb(0,189,79)',
                "secondary-light": "#00B14933",
                "highlight-light": 'rgba(18, 44, 67, 1)',
                "block-bg-light": "#fff",
                "bg-light": "rgba(241, 241, 241, 1)",
                "text-light": "#808080",

                // DarkTheme
                "primary-dark": 'rgba(16, 87, 229, 1)',
                "primary-dark-hover": 'rgb(16,90,234)',
                "secondary-dark": 'rgba(16, 87, 229, 0.2)',
                "highlight-dark": 'rgba(48, 166, 253, 1)',
                "bg-dark": "rgba(37, 38, 57, 1)",
                "block-bg-dark": "#3c3c4b",
                "text-dark": "#CCCCCC",

                // Utils
                urgent: "#F5861F",
                danger: "#EB5757",
                "modal-overlay": "rgba(0,0,0,0.5)"
            },
            fontSize: {
                'heading': ['1.2rem', {
                    lineHeight: '1.2rem',
                    fontWeight: "600"
                }],
                'basic': ['0.9rem', {
                    lineHeight: '0.9rem',
                    fontWeight: "500"
                }],
                'small': ['0.7rem', {
                    lineHeight: '0.7rem',
                    fontWeight: "400"
                }],
            },
            boxShadow: {
                "todo-list": "6px 6px 23px 0px rgba(0, 0, 0, 0.10)"
            }
        },
    },
    plugins: [],
}
