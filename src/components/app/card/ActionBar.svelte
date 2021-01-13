<script lang="ts">
  import { getContext } from 'svelte'
  import { card } from '../../../context'

  const { getRepo } = getContext(card)
  const repo = getRepo()
</script>

<style>
  .card-action-bar {
    padding: 0 24px 24px 24px;
  }

  .demo-link {
    margin: 0 0 0 1rem;
  }
</style>

<div class="card-action-bar">
  <a
    href={repo.html_url}
    target="_blank"
    rel="noopener noreferrer"
    class="github-link">
    GitHub
  </a>
  {#if !!repo.homepage}
    <a
      href={repo.homepage}
      target="_blank"
      rel="noopener noreferrer"
      class="demo-link">
      Demo
    </a>
  {/if}
</div>
