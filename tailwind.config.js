/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Background Images
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // Spacing
      spacing: {
        '128': '32rem',
      },

      // Transition Properties
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },

      // Font Family
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    // For card hover animations
    'translate-y-0',
    'translate-y-8',
    'translate-y-10',
    'scale-100',
    'scale-105',
    'scale-110',

    // For button states
    'opacity-100',
    'opacity-0',
    'translate-y-0',
    'translate-y-5',

    // For gradients
    'from-blue-600',
    'to-blue-500',
    'hover:from-blue-700',
    'hover:to-blue-600',

    // For shadows
    'shadow-lg',
    'shadow-xl',
    'hover:shadow-xl',
    'hover:shadow-2xl',
  ],
};
