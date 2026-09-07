<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { projects } from '$lib/data/projects';
</script>

<section id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading" class="section-title">Projects</h2>

    <div class="projects">
        {#each projects as project (project.title)}
            <ProjectCard {project} />
        {/each}
    </div>
</section>

<style>
    .projects {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>