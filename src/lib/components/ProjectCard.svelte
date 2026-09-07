<script lang="ts">
    import TechTags from './TechTags.svelte';
    import type { Project } from '$lib/data/projects';

    let { project }: { project: Project } = $props();
</script>

<article class="card">
    <div class="content">
        {#if project.image}
            <div class="media">
                <img
                    class="media__img"
                    src={project.image}
                    alt={project.imageAlt ?? ''}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        {:else if project.video}
            <div class="media">
                <video
                    class="media__vid"
                    autoplay
                    loop
                    muted
                    playsinline
                    preload="metadata"
                    aria-label={`${project.title} demonstration`}
                >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video element.
                </video>
            </div>
        {/if}

        <div class="info">
            <h3>
                {#if project.href}
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.title}
                        <span class="visually-hidden"> (opens in a new tab)</span>
                    </a>
                {:else}
                    {project.title}
                {/if}
            </h3>

            <p class="desc">{project.description}</p>
            <TechTags technologies={project.technologies} />
        </div>
    </div>
</article>

<style>
    .card {
        scroll-margin-top: 2rem;
    }

    .media__img,
    .media__vid {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
</style>
