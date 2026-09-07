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
            <div class="role-title">
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

            <p class="company-title">{experience.company}</p>
            <p class="desc">{experience.description}</p>
            <TechTags technologies={experience.technologies} />
        </div>
    </div>
</article>

<style>
    .role-title {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 0.5rem 1rem;
    }

    .role-title h3 {
        margin: 0;
    }

    .date,
    .company-title {
        color: var(--text-muted);
    }

    .date {
        margin: 0;
        flex-shrink: 0;
        white-space: nowrap;
    }

    .company-title {
        margin-block: 0.5rem;
    }

    .card {
        scroll-margin-top: 2rem;
    }
</style>