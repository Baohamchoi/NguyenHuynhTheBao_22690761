export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f64a86", // Màu chính
      },
      backgroundColor: {
        primary: "#f64a86", // Màu nền chính
        second: "#fef0f5", // Màu nền phụ
      },
    },
  },
  plugins: [],
}
