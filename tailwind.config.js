module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    flexGrow: false, // Disable Tailwind's flex-grow utilities to avoid conflict with custom .grow class
  },
  plugins: [],
};
