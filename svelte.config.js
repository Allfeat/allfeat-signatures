import { resolve, join } from 'path'
import { fileURLToPath } from 'url'
import preprocess from 'svelte-preprocess'

const stylesPath = `${resolve(fileURLToPath(import.meta.url), '../src/styles/')}`
export const scssImports = `@use "${join(stylesPath, 'imports.scss')}" as *;`
console.log(scssImports)

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        scss: {
            prependData: scssImports,
        }
    }),
}
