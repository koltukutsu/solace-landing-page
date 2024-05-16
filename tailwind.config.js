const svgToDataUri = require("mini-svg-data-uri");

const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },

        screens: {
            xs: "450px",
            // => @media (min-width: 450px) { ... }

            sm: "575px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1200px) { ... }

            "2xl": "1400px",
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            animation: {
                aurora: "aurora 60s linear infinite",
            },
            keyframes: {
                aurora: {
                    from: {
                        backgroundPosition: "50% 50%, 50% 50%",
                    },
                    to: {
                        backgroundPosition: "350% 50%, 350% 50%",
                    },
                },
            },

            colors: {
                slate: {
                    700: "#4a5568", // Example color for slate-700
                },
                blue: {
                    500: "#3b82f6", // Example color for blue-500
                },
                specialBlue: "#4299E1",
                neutral: {
                    100: "#f5f7fa",
                    200: "#e4e7eb",
                    300: "#cbd2d9",
                    400: "#9aa5b1",
                    500: "#7b8794",
                    600: "#616e7c",
                    700: "#52606d",
                    800: "#3e4c59",
                    900: "#323f4b",
                },
                current: "currentColor",
                transparent: "transparent",
                white: "#FFFFFF",
                black: "#121723",
                dark: "#1D2430",
                // primary: "#0E76A8",
                primary: "#00AEEF",
                yellow: "#FBB040",
                linkedin: "#0E76A8",
                "logo-text-color": "#00AEEF",
                "body-color": "#788293",
                "body-color-dark": "#959CB1",
                "gray-dark": "#1E232E",
                "gray-light": "#F0F2F9",
                stroke: "#E3E8EF",
                "stroke-dark": "#353943",
                "bg-color-dark": "#171C28",
            },

            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
                signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
                one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
                two: "0px 5px 10px rgba(6, 8, 15, 0.1)",
                three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
                sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
                "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)",
                "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)",
                submit: "0px 5px 20px rgba(4, 10, 34, 0.1)",
                "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)",
                btn: "0px 1px 2px rgba(4, 10, 34, 0.15)",
                "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)",
                "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)",
            },
            dropShadow: {
                three: "0px 5px 15px rgba(6, 8, 15, 0.05)",
            },
        },
    },
    plugins: [
        addVariablesForColors,
        // function ({matchUtilities, theme}: any) {
        function ({matchUtilities, theme}) {
            matchUtilities(
                {
                    // "bg-dot-thick": (value: any) => ({
                    "bg-dot-thick": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                        )}")`,
                    }),
                },
                {values: flattenColorPalette(theme("backgroundColor")), type: "color"}
            );
        },
    ],
};

// function addVariablesForColors({ addBase, theme }: any) {
function addVariablesForColors({addBase, theme}) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}