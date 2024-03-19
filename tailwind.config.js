module.exports = {
  purge: ['./**/*.html', './**/*.js', './*.html'],
  theme: {
    extend: {
      colors: {
        // 添加或扩展颜色
      },
    },
  },
  // 启用所有颜色
  presets: [
    require('tailwindcss/colors'),
  ],
}
