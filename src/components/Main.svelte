<script lang="ts">
  import { onMount } from 'svelte'
  import dayjs from 'dayjs'

  import Card from './Card.svelte'
  import Loading from './Loading.svelte'

  let repos = []
  const whitelist = [
    'connection',
    'shelter',
    'crawler-dashboard',
    'crawler-test',
    'here-just-record',
    'see-you-next-id',
    'sudoku-generator',
    'sudoku-solver',
    'where-are-we-from',
  ]

  let final = []

  onMount(async () => {
    // const res = await fetch(`/mock/repos.json`);
    const res = await fetch(`https://api.github.com/users/Lifeni/repos`)
    repos = await res.json()
    final = repos
      .filter(repo => whitelist.includes(repo.name))
      .sort((a, b) => dayjs(b.updated_at).unix() - dayjs(a.updated_at).unix())
  })
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
</style>

<main>
  {#each final as repo (dayjs(repo.id).unix())}
    <Card {repo} />
  {:else}
    <Loading />
  {/each}
</main>
