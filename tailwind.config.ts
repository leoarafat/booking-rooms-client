import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradients: {
        custom:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,10,77,1) 40%, rgba(22,33,36,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
