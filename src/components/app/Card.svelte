<script type="ts">
  import { setContext } from 'svelte'
  import { card } from '../../context'
  import ActionBar from './ActionBar.svelte'
  import AppGallery from './AppGallery.svelte'
  import StatusBar from './StatusBar.svelte'
  import Tag from './AppTag.svelte'

  setContext(card, {
    getApp: () => app,
  })

  export let app: IApp
</script>

<style>
  .card {
    width: calc(50% - 36px);
    max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    background-color: var(--background-0);
    overflow: hidden;
  }

  .card-content {
    width: 100%;
    padding: 16px 24px 24px 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .card-content section {
    display: flex;
    flex-direction: column;
  }

  .app-logo {
    width: 72px;
    height: 72px;
    margin: 4px 24px 4px 4px;
    border-radius: 50%;
  }

  .card-title {
    margin: 0;
    display: flex;
    align-items: center;
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

  @media (max-width: 1024px) {
    .card {
      width: 348px;
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: unset;
    }

    .card-description {
      font-size: 0.875rem;
    }
  }
</style>

<div class="card">
  <StatusBar />
  <div class="card-content">
    <section>
      <img
        src={app.logo || 'https://file.lifeni.life/dashboard/default.svg'}
        alt="App Logo"
        class="app-logo" />
    </section>
    <section>
      <h3 class="card-title">
        {app.title}
        {#if app.archived}
          <Tag type="archived" />
        {/if}
      </h3>
      <p class="card-description">{app.description}</p>
    </section>
  </div>
  <ActionBar />
  <AppGallery />
</div>
