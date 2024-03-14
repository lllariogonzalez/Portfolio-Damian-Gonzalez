/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
            colors: {
                light: {
                    fondo: {
                        primary: "#fafbfc",
                        secondary: "#fff",
                    },
                    texto: {
                        primary: "#e64e4e",
                        secondary: "#272727",
                    },
                    gray: {
                        primary: "#777",
                        secondary: "#bbb",
                    },
                },
                dark: {
                    fondo: {
                        primary: "#0a0a0a",
                        secondary: "#181818",
                    },
                    texto: {
                        primary: "#f3f3f3",
                        secondary: "#ccc",
                    },
                    gray: {
                        primary: "#999",
                        secondary: "#555",
                    },
                },
                primary: "#ffb200",
            },
            gridTemplateColumns: {
                modal: "auto 23rem",
            },
            maxHeight: {
                "accordion-expanded": "800px",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
