<script type="ts">
  import { setContext } from 'svelte'
  import { showcase } from '../../context'
  import Actions from './Actions.svelte'
  import Status from './Status.svelte'

  setContext(showcase, {
    getApp: () => app,
  })

  export let app: IApp
</script>

<div class="showcase">
  <img
    src={app.logo || 'https://file.lifeni.life/dashboard/default.svg'}
    alt="App Logo"
    class="app-logo"
  />
  <h2 class="app-title">
    <a href={app.actions.github} target="_blank" rel="noopener noreferrer">
      {app.title}
    </a>
  </h2>
  <Status />
  <p class="app-description">{app.description}</p>
  <Actions />
</div>

<style>
  .showcase {
    position: relative;
    width: 100%;
    max-width: 420px;
    margin: 0;
    padding: 36px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 4px;
    background-color: var(--background-0);
    overflow: hidden;
  }

  .app-logo {
    width: 72px;
    height: 72px;
    margin: 0 0 24px 0;
    border-radius: 50%;
  }

  .app-title {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .app-title a {
    color: var(--font-primary);
  }

  .app-title a:hover {
    color: var(--font-link);
  }

  .app-description {
    padding: 0;
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--font-primary);
  }

  @media (max-width: 1024px) {
    .showcase {
      width: 348px;
    }
  }

  @media (max-width: 768px) {
    .showcase {
      width: 100%;
      max-width: unset;
    }
  }
</style>
