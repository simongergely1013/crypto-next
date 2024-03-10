import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primaryBg: "var(--darkPrimary)",
          secondaryBg: "var(--darkSecondary)",
          textPrimary: "var(--darkTextPrimary)",
          textSecondary: "var(--darkTextSecondary)",
          navTopBg: "var(--darkNavTop)",
          chartL: "var(--darkChartL)",
          chartRL: "var(--darChartR)",
          inactiveBg: "var(--darkInactive)"
        },
        dark: {
          primaryBg: "var(--lightPrimary)",
          secondaryBg: "var(--lightSecondary)",
          textPrimary: "var(--lightTextPrimary)",
          textSecondary: "var(--lightTextSecondary)",
          navTopBg: "var(--lightNavTop)",
          chartL: "var(--lightChartL)",
          chartR: "var(--lightChartR)",
          inactiveBg: "var(--lightInactive)"
        },
        red: "var(--red)",
        green: "var(--green)",
        progressBarBtc: "var(--progressBarBtc)",
        progressBarEth: "var(--progressBarEth)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
