import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { scssImports } from './svelte.config'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: scssImports,
            }
        }
    },
})
