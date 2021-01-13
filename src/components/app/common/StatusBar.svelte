<script lang="ts">
  import { getContext } from 'svelte'
  import { card, showcase } from '../../../context'
  import Icons from '../../other/Icons.svelte'

  export let type: string
  let repo: IRepo, app: IApp

  if (type === 'card') {
    const { getRepo } = getContext(card)
    repo = getRepo()
  } else if (type === 'showcase') {
    const { getApp } = getContext(showcase)
    app = getApp()
  }
</script>

<style>
  .card-status-bar {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .license,
  .star-count,
  .fork-count,
  .issues-count {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }
</style>

<div class="card-status-bar">
  {#if (repo || app).license?.spdx_id}
    <span class="license">
      <Icons name="license" />
      {(repo || app).license.spdx_id}
    </span>
  {/if}
  {#if (repo || app).stargazers_count !== 0}
    <span class="star-count">
      <Icons name="star" />
      {(repo || app).stargazers_count}
    </span>
  {/if}
  {#if (repo || app).forks_count !== 0}
    <span class="fork-count">
      <Icons name="fork" />
      {(repo || app).forks_count}
    </span>
  {/if}
  {#if (repo || app).open_issues_count !== 0}
    <span class="issues-count">
      <Icons name="issues" />
      {(repo || app).open_issues_count}
    </span>
  {/if}
</div>
