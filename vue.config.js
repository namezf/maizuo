module.exports = {
  // 选项...
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
