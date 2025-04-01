/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      "foundation-orange": "#E65800",
      ...colors,
      defaultOrange: "#14199C",
      defaultBlue: "#14199C",
      defaultOrangeHover: "#b74600",
      secondaryOrange: "#FFF1E9",
      primaryBorder: "#DED9DD",
      primaryOrange: "#E65800",
      secondaryOrange: "#FD6100",
      darkBlue: "#040421",
      secondaryTextColor: "#585858",
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "992px",
      xl: "1150px",
      "2xl": "1536px",
    },
  },
};
export const plugins = [];
