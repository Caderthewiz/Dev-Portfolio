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

        <div>
            <h3>
                {#if project.href}
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.title}
                    </a>
                {:else}
                    {project.title}
                {/if}
            </h3>

            <p>{project.description}</p>
            <TechTags technologies={project.technologies} />
        </div>
    </div>
</article>

<style>
    .media {
        flex-shrink: 0;
    }

    .media__img,
    .media__vid {
        display: block;
        width: 160px;
        height: 90px;
        box-sizing: border-box;
        border: 2px solid var(--plate-border);
        border-radius: var(--plate-radius);
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .card:hover h3 a {
        color: var(--accent);
        text-decoration: underline;
    }
</style>
