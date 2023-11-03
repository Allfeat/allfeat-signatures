import cssnano from 'cssnano'
import presetEnv from 'postcss-preset-env'
import focusVisible from 'postcss-focus-visible'
import normalize from 'postcss-normalize'


export default {
    plugins: [
        // Preset Env
        presetEnv({
            stage: 3,
        }),

        // Focus visible
        focusVisible({}),

        // Normalize
        normalize({}),

        // CSS Nano
        !process.env.DEV && cssnano({
            preset: ['default', {
                autoprefixer: true,
                discardComments: { removeAll: true },
                calc: { precision: 2 },
                safe: true
            }]
        }),
    ]
}
