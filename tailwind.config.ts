import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Dark mode colors
                'dark-900': '#121212',
                'dark-800': '#1E1E1E',
                'dark-700': '#2D2D2D',
                'dark-600': '#3D3D3D',
                'dark-500': '#4D4D4D',
                'dark-400': '#5D5D5D',
                'dark-300': '#6D6D6D',
                'dark-200': '#7D7D7D',
                'dark-100': '#8D8D8D',
                'dark-50': '#9D9D9D',
            },
        },
    },
    plugins: [],
};

export default config; 