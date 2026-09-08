<script lang="ts">
    import TechTags from './TechTags.svelte';
    import type { Experience } from '$lib/data/experience';

    let { experience }: { experience: Experience } = $props();

    const formatMonth = (value: string) =>
        new Intl.DateTimeFormat('en-US', {
            month: 'short',
            year: 'numeric',
            timeZone: 'UTC'
        }).format(new Date(`${value}-01T00:00:00Z`));
</script>

<article class="card">
    <div class="content">
        <div class="info">
            <div class="role">
                <h3>{experience.role}</h3>
                <p class="date">
                    <time datetime={experience.start}>{formatMonth(experience.start)}</time>
                    –
                    {#if experience.end}
                        <time datetime={experience.end}>{formatMonth(experience.end)}</time>
                    {:else}
                        Present
                    {/if}
                </p>
            </div>

            <p class="company">{experience.company}</p>
            <p>{experience.description}</p>
            <TechTags technologies={experience.technologies} />
        </div>
    </div>
</article>

<style>
    .role {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
    }

    .date,
    .company {
        color: var(--text-muted);
    }

    .company {
        margin-block: 0.2rem 0.5rem;
    }
</style>