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
        padding: 0.5rem 0;
    }
    
    .tech-tags li {
        padding: 0.125rem 0.6rem;
        border: 1px solid var(--accent);
        border-radius: 100px;
        color: var(--accent);
        font-size: 0.8em;
        line-height: 1.4;
    }
</style>