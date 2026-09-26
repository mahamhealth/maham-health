import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { navy: {950:"#060D19",900:"#0A192F",850:"#0D203D",800:"#132D54",700:"#1E3E6D"}, gold: {300:"#F5E4B2",400:"#E5C87E",500:"#D4AF37",600:"#B89225",700:"#8C6E16"} } } }, plugins: [] };
export default config;
