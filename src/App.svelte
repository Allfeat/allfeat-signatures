<style lang="scss">
    @import "./styles/app.scss";
</style>

<script lang="ts">
    import { onDestroy } from 'svelte'
    import htmlTemplate from './template.html?raw'
    // Components
    import FormField from './lib/FormField/FormField.svelte'

    let fields = {
        name: '',
        role: '',
        social_twitter: '',
        social_linkedin: '',
    }

    // Copy button
    let copyTimeout: ReturnType<typeof setTimeout>
    const copyButtonText: { [key: string]: string } = {
        copy: 'Copy to clipboard',
        copied: 'Copied',
    }
    let buttonState = 'copy'

    $: signatureCode = htmlTemplate
        .replace(/%NAME%/g, fields.name)
        .replace(/%ROLE%/g, fields.role)
        .replace(/%SOCIAL_TWITTER%/g, fields.social_twitter)
        .replace(/%SOCIAL_LINKEDIN%/g, fields.social_linkedin)
        .trim()

    // Copy code to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(signatureCode)
        buttonState = 'copied'

        copyTimeout = setTimeout(() => {
            buttonState = 'copy'
        }, 2500)
    }

    onDestroy(() => {
        clearTimeout(copyTimeout)
    })
</script>

<main>
    <div class="container">
        <svg class="logo" width="1152" height="250" viewBox="0 0 1152 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M781.6 78.45c-42.67 0-73.27 29.14-73.27 76.5s30.9 76.5 74.75 76.5c35.9 0 60.33-19.71 65.93-48.26h-33.85c-3.23 11.78-13.84 21.2-32.08 21.2-23.54 0-38.85-15.9-38.85-40.03v-.3h106.83v-9.13c0-49.13-28.25-76.5-69.45-76.5v.02Zm-37.37 61.79c1.77-21.77 16.48-34.72 36.78-34.72s35.02 13.83 35.02 34.72h-71.8Zm190.29-61.79c-35.9 0-62.69 18.24-65.04 53.86h35.02c.6-17.96 10.59-26.78 28.55-26.78 16.79 0 27.07 7.36 27.07 27.07v2.65l-48.56 12.06c-22.66 5.88-42.68 19.42-42.68 44.73 0 22.07 15.6 39.43 45.33 39.43 22.07 0 36.78-10 46.51-27.37v24.42h34.13v-91.8c0-36.2-21.49-58.27-60.33-58.27Zm25.6 93.28c0 21.49-13.83 34.72-33.55 34.72-13.83 0-22.96-6.18-22.96-18.83 0-10.59 6.77-17.36 21.49-20.9l35.02-8.52v13.53ZM1062.18 40.2l-34.73 5.6v35.6h-18.54v29.42h18.54v80.62c0 24.72 10.01 37.08 37.38 37.08h25.02V199.1h-15.31c-9.71 0-12.36-2.35-12.36-12.36v-75.92h27.67V81.4h-27.67V40.2ZM643.65 56.98V81.4H624.8v29.42h18.84v117.7h34.72V110.84h25.32V81.42h-25.32v-21.2c0-9.7 2.95-12.35 12.06-12.35h13.26V19.31h-23.54c-25.6 0-36.5 14.41-36.5 37.67Zm-50.73 130.65V19.31H558.2v171.56c0 23.24 10.88 37.67 36.5 37.67h26.5v-28.55H605c-9.1 0-12.06-2.65-12.06-12.36h-.02Zm-74.92 0V19.31h-34.74v171.56c0 23.24 10.89 37.67 36.5 37.67h26.5v-28.55h-16.19c-9.11 0-12.06-2.65-12.06-12.36h-.02ZM378.64 19.3a34.36 34.36 0 0 0-32.62 23.57l-61.55 185.67h36.5l17.36-55.04h80.06l17.67 55.04h36.5L411.28 42.92a34.35 34.35 0 0 0-32.62-23.6l-.02-.01Zm-30.3 122.41L376.82 52c.45-1.51 2.6-1.51 3.07 0l28.48 89.71h-60.05.02Zm782.38 86.81a21.28 21.28 0 1 0 0-42.56 21.28 21.28 0 0 0 0 42.56ZM223.44 106.24A26.2 26.2 0 1 0 175 86.18a26.2 26.2 0 0 0 48.43 20.06ZM52.58 122.4a26.21 26.21 0 1 0 0-52.42 26.21 26.21 0 0 0 0 52.42Zm72.93 127.13a26.21 26.21 0 1 0 0-52.42 26.21 26.21 0 0 0 0 52.42Z" fill="currentColor"/>
            <path d="M232.85 156.32a39.15 39.15 0 0 0-25.61-4.7c-8.74 1.28-18.98 7.77-30.48 1.13-9.23-5.35-10.62-15.69-13.04-23.64a38.59 38.59 0 0 0-11.11-18.26c-5.54-5.63-12.45-11.76-12.45-21.5 0-13.27 10.74-18.89 16.24-25.8a39.64 39.64 0 0 0 8.69-24.62 38.94 38.94 0 0 0-77.89 0 38.1 38.1 0 0 0 8.6 24.39c4.9 6.18 16.39 14.36 16.39 25.98 0 10.88-9.66 17.29-16.2 25.66a44.17 44.17 0 0 0-6 10.03c-3.56 8.14-3.56 21.22-14.4 27.45-11.5 6.63-21.74.14-30.49-1.14a39.25 39.25 0 0 0-25.6 4.7 38.99 38.99 0 0 0-14.26 53.24 38.92 38.92 0 0 0 53.22 14.22 38.1 38.1 0 0 0 16.83-19.62c2.88-7.32 4.25-21.37 14.33-27.18 8.1-4.66 16.92-1.5 25.98.4.28.1.55.15.83.24.09 0 .17.05.23.05l1.28.28c.31.05.63.14.96.18.14 0 .28.05.37.05 2.25.4 4.58.63 6.95.63h1c.37 0 .74 0 1.15-.05 1.1-.06 2.24-.14 3.33-.28 10.8-1.34 21.46-6.87 31.11-1.28 10.06 5.8 11.45 19.85 14.33 27.17 3.34 8.42 8.83 15 16.84 19.62a39.01 39.01 0 0 0 53.21-14.21 38.93 38.93 0 0 0-14.33-53.16v.02Z" fill="currentColor"/>
        </svg>

        <h1 class="title-medium">Email Signature Generator</h1>

        <form>
            <FormField
                title="Your name"
                labelFor="field-name"
            >
                <input
                    type="text"
                    name="name"
                    id="field-name"
                    placeholder="John Doe"
                    required
                    class="input"
                    bind:value={fields.name}
                >
            </FormField>

            <FormField
                title="Your title/role"
                labelFor="field-role"
            >
                <input
                    type="text"
                    name="role"
                    id="field-role"
                    placeholder="CEO, CTO, Account Manager, etc"
                    required
                    class="input"
                    bind:value={fields.role}
                >
            </FormField>

            <FormField
                title="Your Twitter account"
                labelFor="field-social-twitter"
            >
                <input
                    type="text"
                    name="social-twitter"
                    id="field-social-twitter"
                    placeholder="john_doe"
                    required
                    class="input"
                    bind:value={fields.social_twitter}
                >
            </FormField>

            <FormField
                title="Your LinkedIn account"
                labelFor="field-social-linkedin"
            >
                <input
                    type="text"
                    name="social-linkedin"
                    id="field-social-linkedin"
                    placeholder="johndoe"
                    required
                    class="input"
                    bind:value={fields.social_linkedin}
                >
            </FormField>
        </form>

        {#if Object.values(fields).every(value => value)}
            <div class="signature">
                {@html signatureCode}
            </div>

            <button
                class="button"
                on:click={copyToClipboard}
            >
                {copyButtonText[buttonState]}
            </button>
        {/if}
    </div>
</main>
