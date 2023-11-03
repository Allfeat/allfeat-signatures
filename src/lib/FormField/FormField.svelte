<style lang="scss">
    @import "./FormField";
</style>

<script lang="ts">
    import { fade, fly } from 'svelte/transition'
    import { quartInOut, quartOut } from 'svelte/easing'

    export let title: string
    export let labelFor: string = ''
    export let hasError = false
    export let animated = false
    export let animatedY = 8
</script>

<div
    class="field"
    class:has-error={hasError}
    in:fly={animated ? { y: animatedY, duration: 400, easing: quartInOut } : undefined}
    out:fade={{ duration: 400, easing: quartOut }}
>
    <h2 class="title">
        {#if labelFor}
            <label for={labelFor}>{title}</label>
        {:else}
            {title}
        {/if}
    </h2>

    <slot />
</div>
