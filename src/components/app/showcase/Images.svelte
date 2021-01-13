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
    zoom.attach('.app-screenshot')
    console.log(zoom.getImages())
  }, 0)
</script>

<style>
  .app-preview {
    position: relative;
    width: 100%;
    max-width: 100vw;
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
    <img src={image} alt="截图" data-zoomable class="app-screenshot" />
  {/each}
</div>
