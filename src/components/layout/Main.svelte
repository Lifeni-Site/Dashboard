<script lang="ts">
  import { setContext } from 'svelte'
  import dayjs from 'dayjs'

  import Card from '../app/card/Card.svelte'
  import Showcase from '../app/showcase/Showcase.svelte'
  import Loading from '../other/Loading.svelte'
  import { global } from '../../context'

  setContext(global, {
    getColor: (lang: string) => colors[lang]?.color,
  })

  let repos = []
  let apps = []
  let projects: IProjects = []
  let colors = []

  const fetchData = async () => {
    const fetchProjects = await fetch(`/assets/projects.json`)
    projects = await fetchProjects.json()
    apps = projects.showcase

    const fetchColors = await fetch(`/assets/colors.json`)
    colors = await fetchColors.json()

    const fetchRepos = await fetch(`https://api.github.com/users/Lifeni/repos`)
    repos = await fetchRepos.json()

    return {
      apps: apps.map(app => {
        return { ...app, ...repos.find(repo => repo.name === app.name) }
      }),
      repos: repos
        .filter(repo => projects.card.includes(repo.name))
        .sort((a, b) => dayjs(b.pushed_at).unix() - dayjs(a.pushed_at).unix()),
    }
  }
</script>

<style>
  main {
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    gap: 24px;
    place-content: start center;
    box-sizing: border-box;
    animation: show 0.4s ease;
  }

  section {
    width: calc(100% - 48px);
    margin: 0 auto;
    padding: 24px 0;
    gap: 24px;
    animation: show 0.4s ease;
  }

  h2 {
    width: 100%;
    text-align: center;
    color: var(--font-secondary);
    font-size: 1.125rem;
    animation: show 0.4s ease;
  }

  @media (max-width: 1024px) {
    main {
      grid-template-columns: repeat(auto-fit, 348px);
    }
  }

  @media (max-width: 768px) {
    section {
      width: 100%;
      margin: 0;
    }
  }

  @media (max-width: 426px) {
    main {
      padding: 16px;
      grid-template-columns: repeat(auto-fit, calc(100vw - 32px));
      gap: 16px;
    }

    section {
      padding: 16px 0;
      gap: 16px;
    }
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

{#await fetchData()}
  <Loading />
{:then data}
  <h2>应用 / APP</h2>
  <section>
    {#each data.apps as app}
      <Showcase {app} />
    {/each}
  </section>
  <h2>开源项目 / Projects</h2>
  <main>
    {#each data.repos as repo (dayjs(repo.id).unix())}
      <Card {repo} />
    {/each}
  </main>
{/await}
