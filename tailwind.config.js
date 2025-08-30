/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        card: '#ffffff',
        ink: '#111827',
        subtle: '#6B7280',
        primary: {
          DEFAULT: '#1E293B',
          fg: '#F8FAFC',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.1)'
      },
    },
  },
  plugins: [],
}
