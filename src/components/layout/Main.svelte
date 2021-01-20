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
    position: relative;
    width: 100%;
    max-width: calc(360px * 3 + 48px + 48px);
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    animation: show 0.4s ease;
  }

  section {
    position: relative;
    width: 100%;
    max-width: calc(360px * 3 + 48px + 48px);
    margin: 0 auto;
    padding: 24px 24px 0 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    animation: show 0.4s ease;
  }

  @media (max-width: 1176px) {
    main,
    section {
      width: 100%;
      max-width: calc(360px * 2 + 48px + 24px);
    }
  }

  @media (max-width: 1024px) {
    main,
    section {
      max-width: calc(360px * 2 + 48px);
    }
  }

  @media (max-width: 768px) {
    section {
      margin: 0;
    }
  }

  @media (max-width: 426px) {
    main {
      padding: 16px;
      gap: 16px;
    }

    section {
      padding: 16px 16px 0 16px;
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
  <section>
    {#each data.apps as app}
      {#if app.display}
        <Showcase {app} />
      {/if}
    {/each}
  </section>
  <main>
    {#each data.repos as repo (dayjs(repo.id).unix())}
      <Card {repo} />
    {/each}
  </main>
{/await}
