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
      defaultOrangeHover: "#b74600",
      secondaryOrange: "#FFF1E9",
      primaryBorder: "#DED9DD",
      secondaryTextColor: "#585858",
    },
    fontFamily: {
      "work-sans": ["var(--font-work-sans)"],
    },
  },
};
export const plugins = [];
