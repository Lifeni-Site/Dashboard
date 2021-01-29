<script lang="ts">
  import { getContext } from 'svelte'
  import { card } from '../../context'
  import Icons from '../global/Icons.svelte'

  const { getApp } = getContext(card)
  const app = getApp()
</script>

<style>
  .card-action-bar {
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .card-action-bar section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-action-bar a {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<div class="card-action-bar">
  <section>
    {#each app.actions.links as action}
      <a
        href={action.url}
        target="_blank"
        rel="noopener noreferrer"
        class="action-link">
        <Icons name={action.type} link />
        {action.name}
      </a>
    {/each}
  </section>
  <section>
    <a
      href={app.actions.github}
      target="_blank"
      rel="noopener noreferrer"
      class="github-link">
      <Icons name="github" link />
      GitHub
    </a>
  </section>
</div>
