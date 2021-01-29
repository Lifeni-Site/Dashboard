<script lang="ts">
  import { getContext } from 'svelte'
  import { card } from '../../context'
  import Icons from '../global/Icons.svelte'

  const { getApp } = getContext(card)
  const app = getApp()

  import mediumZoom from 'medium-zoom'
  const zoom = mediumZoom({
    background: 'rgba(0, 0, 0, .8)',
  })
  setTimeout(() => {
    zoom.attach(`.app-screenshot.${app.name}`)
  }, 100)

  let show = false
</script>

<style>
  .app-preview {
    position: relative;
    width: 100%;
    max-width: calc(100vw - 32px);
    padding: 24px 0 0 0;
    display: flex;
    overflow-x: auto;
  }

  .app-screenshot {
    width: 100%;
    max-width: 768px;
  }

  .image-placeholder {
    position: relative;
    width: 100%;
    margin: 24px 0 0 0;
    padding: 12px 24px;
    border-radius: 0 0 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--background-3);
    cursor: pointer;
    transition: all 0.2s;
  }

  .image-placeholder:hover,
  .image-placeholder:active,
  .image-placeholder:focus {
    background-color: var(--background-2);
  }

  .show-gallery {
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: var(--font-secondary);
  }
</style>

{#if !show}
  <button class="image-placeholder" on:click={() => (show = !show)}>
    <Icons name="gallery" />
    <span class="show-gallery"> 查看 {app.images.length} 张截图 </span>
  </button>
{:else}
  <div class="app-preview" id="app-preview">
    {#each app.images as image}
      <img
        src={image}
        alt="截图"
        data-zoomable
        class={`app-screenshot ${app.name}`} />
    {/each}
  </div>
{/if}
