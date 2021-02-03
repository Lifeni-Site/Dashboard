<script lang="ts">
  import dayjs from 'dayjs'

  import Showcase from './app/Showcase.svelte'
  import Loading from './global/Loading.svelte'

  const fetchData = async () => {
    const fetchApps = await fetch(`/assets/apps.json`)
    const apps = await fetchApps.json()

    const fetchRepos = await fetch(`https://api.github.com/users/Lifeni/repos`)
    const repos = await fetchRepos.json()

    return apps
      .map((app: IApp) => {
        return {
          ...repos.find((repo: IRepo) => repo.name === app.name),
          ...app,
        }
      })
      .sort(
        (a: { pushed_at: number }, b: { pushed_at: number }) =>
          dayjs(b.pushed_at).unix() - dayjs(a.pushed_at).unix()
      )
  }
</script>

{#await fetchData()}
  <Loading />
{:then data}
  <main>
    {#each data as app}
      {#if app.display}
        <Showcase {app} />
      {/if}
    {/each}
  </main>
{/await}

<style>
  main {
    position: relative;
    width: 100%;
    max-width: 912px;
    min-height: calc(100vh - 340px);
    margin: 0 auto;
    padding: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    gap: 24px;
    background-color: transparent;
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
