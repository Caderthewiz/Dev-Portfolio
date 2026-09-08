<script lang="ts">
    import ExperienceCard from '$lib/components/ExperienceCard.svelte';
    import { experiences } from '$lib/data/experience';
</script>

<section id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading" class="section-title">Experience</h2>

    <div class="experience-cards">
        {#each experiences as experience (experience.role + experience.company)}
            <ExperienceCard {experience} />
        {/each}
    </div>
</section>

<style>
    .experience-cards {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
