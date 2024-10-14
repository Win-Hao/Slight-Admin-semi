import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {TanStackRouterVite} from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/Slight-Admin-semi/',
    plugins: [TanStackRouterVite(), react()],
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
            '#types': resolve(__dirname, './src/types'),
        }
    },
    server: {
        // 自动打开浏览器
        open: true,
        host: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:3003',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})
