<script lang="ts">
  import { getContext } from 'svelte'
  import { showcase } from '../../../context'

  const { getApp } = getContext(showcase)
  const app = getApp()

  import mediumZoom from 'medium-zoom'
  const zoom = mediumZoom({
    background: 'rgba(0, 0, 0, .8)',
  })
  setTimeout(() => {
    zoom.attach(`.app-screenshot.${app.name}`)
  }, 100)
</script>

<style>
  .app-preview {
    position: relative;
    width: 100%;
    max-width: calc(100vw - 32px);
    display: flex;
    overflow-x: auto;
  }

  .app-screenshot {
    width: 100vw;
    max-width: 768px;
  }
</style>

<div class="app-preview" id="app-preview">
  {#each app.images as image}
    <img
      src={image}
      alt="截图"
      data-zoomable
      class={`app-screenshot ${app.name}`} />
  {/each}
</div>
