<script lang="ts">
    import { onMount } from 'svelte';

    const EMAIL = 'cadecameron@ksu.edu';
    const GITHUB_URL = 'https://github.com/Caderthewiz';

    const sections = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'publications', label: 'Publications' }
    ] as const;

    let activeId = $state<string>(sections[0].id);

    onMount(() => {
        const scrollRoot = document.querySelector('.content__right');

        const sectionElements = sections
            .map(({ id }) => document.getElementById(id))
            .filter((element): element is HTMLElement => element instanceof HTMLElement);

        if (!sectionElements.length) return;

        const root =
            scrollRoot instanceof HTMLElement && scrollRoot.scrollHeight > scrollRoot.clientHeight
                ? scrollRoot
                : null;

        const updateActiveSection = () => {
            const rootBounds = root?.getBoundingClientRect() ?? {
                top: 0,
                bottom: window.innerHeight
            };
            const marker = rootBounds.top + (rootBounds.bottom - rootBounds.top) * 0.3;
            const currentSection = sectionElements
                .filter((section) => section.getBoundingClientRect().top <= marker)
                .at(-1);

            activeId = currentSection?.id ?? sections[0].id;

            if (root && root.scrollTop + root.clientHeight >= root.scrollHeight - 1) {
                activeId = sections[sections.length - 1].id;
            }
        };

        const scrollTarget = root ?? window;
        scrollTarget.addEventListener('scroll', updateActiveSection, { passive: true });
        updateActiveSection();

        return () => {
            scrollTarget.removeEventListener('scroll', updateActiveSection);
        };
    });
</script>

<header class="info">
    <div>
        <h1 class="name">Cade Cameron</h1>
        <p class="position">Software Developer</p>
        <p class="major">Computer Science and Pure Mathematics</p>
        <a class="lab-link" href="https://traianamariucai.wixsite.com/amariucai/pits-lab" target="_blank" rel="noopener noreferrer">
            PITS Research Lab
        </a>

        <nav class="section-nav" aria-label="Section navigation">
            {#each sections as section (section.id)}
                <a
                    href={`#${section.id}`}
                    class:active={activeId === section.id}
                    aria-current={activeId === section.id ? 'page' : undefined}
                >
                    {section.label}
                </a>
            {/each}
        </nav>
    </div>

    <nav class="links" aria-label="Contact and Social links">
        <a href={`mailto:${EMAIL}`} aria-label="Email Cade Cameron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                <path d="M3 6.5l9 6.5 9-6.5" />
            </svg>
        </a>
        <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
        >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.05 11.05 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
        </a>
    </nav>
</header>

<style>
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .major {
        margin-block: 0.5rem;
        color: var(--text-muted);
    }

    .lab-link {
        color: var(--text-muted);
        text-decoration: underline;
    }

    .section-nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }

    .section-nav a {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: var(--text-muted);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .section-nav a::before {
        content: '';
        display: block;
        width: 1rem;
        height: 1px;
        background: var(--text-muted);
        transition: width 0.2s ease, background-color 0.2s ease;
    }

    .section-nav a:hover,
    .section-nav a.active {
        color: var(--text);
    }

    .section-nav a:hover::before,
    .section-nav a.active::before {
        width: 2rem;
        background: var(--accent);
    }

    .links {
        display: flex;
        gap: 1rem;
    }

    .links a {
        transition: color 0.2s ease;
    }

    .links a:hover {
        color: var(--accent);
    }

    .lab-link:focus-visible,
    .section-nav a:focus-visible,
    .links a:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 4px;
        border-radius: 2px;
    }

    .links svg {
        display: block;
        width: 2rem;
        height: 2rem;
    }
</style>
