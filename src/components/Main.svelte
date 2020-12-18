<script lang="ts">
  import { setContext } from 'svelte'
  import dayjs from 'dayjs'

  import Card from './Card.svelte'
  import Loading from './Loading.svelte'
  import { global } from '../context'

  setContext(global, {
    getColor: (lang: string) => colors[lang]?.color,
  })

  let repos = []
  let whitelist = []
  let colors = []

  const fetchData = async () => {
    const fetchWhitelist = await fetch(`/assets/whitelist.json`)
    whitelist = await fetchWhitelist.json()

    const fetchColors = await fetch(`/assets/colors.json`)
    colors = await fetchColors.json()

    const fetchRepos = await fetch(`https://api.github.com/users/Lifeni/repos`)
    repos = await fetchRepos.json()

    return repos
      .filter(repo => whitelist.includes(repo.name))
      .sort((a, b) => dayjs(b.pushed_at).unix() - dayjs(a.pushed_at).unix())
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
  }

  @media (max-width: 1024px) {
    main {
      grid-template-columns: repeat(auto-fit, 348px);
    }
  }

  @media (max-width: 426px) {
    main {
      padding: 16px;
      grid-template-columns: repeat(auto-fit, calc(100vw - 32px));
      gap: 16px;
    }
  }
</style>

<main>
  {#await fetchData()}
    <Loading />
  {:then data}
    {#each data as repo (dayjs(repo.id).unix())}
      <Card {repo} />
    {/each}
  {/await}
</main>
