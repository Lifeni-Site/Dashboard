<script lang="ts">
  import { getContext } from 'svelte'
  import { card } from '../context'
  import Icons from './Icons.svelte'

  const { getRepo } = getContext(card)
  const repo = getRepo()
</script>

<style>
  .card-status-bar {
    display: flex;
    align-items: center;
  }

  .license,
  .star-count,
  .fork-count,
  .issues-count {
    margin: 0 0.7rem 0 0;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }
</style>

<div class="card-status-bar">
  {#if repo.license?.spdx_id}
    <span class="license">
      <Icons name="license" />
      {repo.license.spdx_id}
    </span>
  {/if}
  {#if repo.stargazers_count !== 0}
    <span class="star-count">
      <Icons name="star" />
      {repo.stargazers_count}
    </span>
  {/if}
  {#if repo.forks_count !== 0}
    <span class="fork-count">
      <Icons name="fork" />
      {repo.forks_count}
    </span>
  {/if}
  {#if repo.open_issues_count !== 0}
    <span class="issues-count">
      <Icons name="issues" />
      {repo.open_issues_count}
    </span>
  {/if}
</div>
