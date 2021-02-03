<script lang="ts">
  import { getContext } from 'svelte'
  import { showcase } from '../../context'
  import Icons from '../global/Icons.svelte'

  const { getApp } = getContext(showcase)
  const app = getApp()
</script>

<div class="app-actions">
  {#each app.actions.links as action}
    <a
      href={action.url}
      target="_blank"
      rel="noopener noreferrer"
      class="action-link"
    >
      <Icons name={action.type} link />
      {action.name}
    </a>
  {/each}
</div>

<style>
  .app-actions {
    position: relative;
    width: 100%;
    margin: 8px 0 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .app-actions a {
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
