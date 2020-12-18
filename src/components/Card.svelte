<script type="ts">
  import { getContext, setContext } from 'svelte'
  import { card } from '../context'
  import ActionBar from './ActionBar.svelte'
  import MetaBar from './MetaBar.svelte'
  import StatusBar from './StatusBar.svelte'

  setContext(card, {
    getRepo: () => repo,
  })

  export let repo: IRepo
</script>

<style>
  .card {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    background-color: var(--background-0);
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    .card {
      width: 348px;
    }
  }

  @media (max-width: 426px) {
    .card {
      width: 100%;
    }
  }

  .card-content {
    padding: 24px;
    box-sizing: border-box;
  }

  .card-title {
    margin: 0;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: var(--font-primary);
  }
  .card-description {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--font-primary);
  }
</style>

<div class="card">
  <MetaBar />
  <div class="card-content">
    <StatusBar />
    <h3 class="card-title">{repo.name}</h3>
    <p class="card-description">{repo.description}</p>
  </div>
  <ActionBar />
</div>
