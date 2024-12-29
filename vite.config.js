import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    cors: true
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: "dist",
    minify: "terser", // esbuild打包速度最快，terser打包体积最小。
    // assetsInlineLimit: 4000, // 小于该值 图片将打包成Base64
    terserOptions: {
      compress: {
        // warnings: false,
        drop_console: true, //打包时删除console
        drop_debugger: true, //打包时删除 debugger
        pure_funcs: ["console.log"]
      },
      output: {
        // 去掉注释内容
        comments: true
      }
    },
    reportCompressedSize: false, // 禁用 gzip 压缩大小报告，可略微减少打包时间
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // js最小拆包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[1].toString();
          }
        },
        // 静态资源分类和包装
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  }
})
