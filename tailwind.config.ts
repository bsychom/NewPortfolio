import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'bg' : '#1D0677',
        'sec' : '#00337C',
        'thr' : '#1C82AD',
        'lst' : '#03C988',
        'bgg' : '#150554',
        'border': '#0c0230'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container:{
        center: true,
        padding:{
          DEFAULT : '20px',
          'md':'50px',
        }
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
