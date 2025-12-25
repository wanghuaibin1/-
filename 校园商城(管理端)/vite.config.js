import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
  plugins: [vue()],
  base: './',	//不加打包后白屏
  server: {
    proxy: {
      '/api': {
        target: 'http://47.109.31.100:9999',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.tsx', '.json'],  // 可以省略的后缀名
  }
})
