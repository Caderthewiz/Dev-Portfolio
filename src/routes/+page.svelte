<script lang="ts">
    import Info from '$lib/components/Info.svelte';
    import About from '$lib/components/About.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Publications from '$lib/components/Publications.svelte';
</script>

<div class="content">
    <aside class="content__left" aria-label="Site information">
        <Info />
    </aside>

    <main id="main-content"class="content__right">
        <About />
        <Experience />
        <Projects />
        <Publications />
    </main>
</div>

<style>
    .content {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .content__left {
        flex: 0 0 38.2%;
        padding: 3rem 2.5rem;
        box-sizing: border-box;
        overflow: hidden;
    }

    .content__right {
        display: flex;
        flex: 1 1 61.8%;
        flex-direction: column;
        gap: 5rem;
        min-width: 0;
        padding: 3rem 2rem;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    @media (max-width: 900px) {
        .content {
            flex-direction: column;
            height: auto;
        }
        
        .content__left {
            flex: none;
            overflow: visible;
        }
        
        .content__right {
            flex: none;
            height: auto;
            overflow: visible;
        }
    }
</style>