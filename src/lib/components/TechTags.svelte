<script lang="ts">
    let { technologies }: { technologies: string[] } = $props();
</script>

<ul class="tech-tags" aria-label="Technologies used">
    {#each technologies as technology (technology)}
        <li>{technology}</li>
    {/each}
</ul>

<style>
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .tech-tags li {
        padding: 0.25rem 0.55rem;
        border: 1px solid var(--accent);
        border-radius: 999px;
        color: var(--accent);
        font-size: 0.8rem;
    }
</style>