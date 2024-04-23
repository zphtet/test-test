/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      keyframes: {
        scaleProgress: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
        colorChange: {
          "0%": {
            backgroundColor: "red",
          },
          "50%": {
            backgroundColor: "green",
          },
          "100%": {
            backgroundColor: "gold",
          },
        },
        scaleYProgress: {
          "0%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(0vh)",
          },
          "100%": {
            transform: "translateY(-50vh)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        progress: "scaleProgress auto linear , colorChange auto linear",
        bounce: "bounce auto linear 5 alternate",
        scaleYProgress: "scaleYProgress auto linear",
        scaleProgress: "scaleProgress auto linear",
        colorChange: "colorChange auto linear",
        fadeIn: "fadeIn auto linear",
        scroll: "scroll 5s linear infinite",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
