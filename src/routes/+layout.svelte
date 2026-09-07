<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
    import FlowField from '$lib/components/FlowField.svelte';
	import './../global.css';
    import './_styles/portfolio.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="site-layout portfolio-theme">
    <div class="site__background" aria-hidden="true">
        <FlowField />
    </div>	
    
	<div class="site__body">
		<div class="body__content">
            {@render children()}
		</div>
	</div>
</div>

<style>
    :root {
        --content-width: 61.8%;
        --margin-inline: 19.1%;
        --margin-block: 2rem;

        --plate-bg: rgba(10, 14, 22, 0.6);
        --plate-blur: 0.8rem;
        --plate-border: rgba(255, 255, 255, 0.1);
        --plate-radius: 0.5rem;
        --plate-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    }

	.site-layout {
        position: relative;
		min-height: 100vh;
	}

    .site__background {
		position: fixed;
		inset: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
        pointer-events: none;
	}

	.site__body {
		position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
        padding: var(--margin-block) var(--margin-inline);
        box-sizing: border-box;
	}
    
    .body__content {
        position: relative;
        width: 100%;
        height: calc(100vh - var(--margin-block) * 2);
        background: var(--plate-bg);
        backdrop-filter: blur(var(--plate-blur));
        -webkit-backdrop-filter: blur(var(--plate-blur));
        border: 1px solid var(--plate-border);
        border-radius: var(--plate-radius);
        box-shadow: var(--plate-shadow);
        overflow: hidden;
        box-sizing: border-box;
    }
</style>