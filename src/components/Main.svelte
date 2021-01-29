<script lang="ts">
  import { setContext } from 'svelte'
  import dayjs from 'dayjs'

  import Card from './app/Card.svelte'
  import Loading from './global/Loading.svelte'
  import { global } from '../context'

  setContext(global, {
    getColor: (lang: string) => colors[lang]?.color,
  })

  let colors = []

  const fetchData = async () => {
    const fetchApps = await fetch(`/assets/apps.json`)
    const apps = await fetchApps.json()

    const fetchColors = await fetch(`/assets/colors.json`)
    colors = await fetchColors.json()

    const fetchRepos = await fetch(`https://api.github.com/users/Lifeni/repos`)
    const repos = await fetchRepos.json()

    return apps
      .map(app => {
        return { ...repos.find(repo => repo.name === app.name), ...app }
      })
      .sort((a, b) => dayjs(b.pushed_at).unix() - dayjs(a.pushed_at).unix())
  }
</script>

<style>
  main {
    position: relative;
    width: fit-content;
    min-height: calc(100vh - 340px);
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    gap: 24px;
    animation: show 0.4s ease;
    transition: all 0.2s;
  }

  @media (max-width: 768px) {
    main {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 425px) {
    main {
      padding: 16px;
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
  <main>
    {#each data as app}
      {#if app.display}
        <Card {app} />
      {/if}
    {/each}
  </main>
{/await}
