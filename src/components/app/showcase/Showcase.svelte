<script type="ts">
  import { setContext } from 'svelte'
  import { showcase } from '../../../context'

  import Language from '../common/Language.svelte'
  import StatusBar from '../common/StatusBar.svelte'
  import Icons from '../../other/Icons.svelte'
  import Images from './Images.svelte'
  import Releases from './Releases.svelte'

  setContext(showcase, {
    getApp: () => app,
  })

  export let app: IApp
</script>

<style>
  .showcase {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    background-color: var(--background-0);
    overflow: hidden;
  }

  .app-content {
    position: relative;
    width: 100%;
    padding: 24px;
    display: flex;
    box-sizing: border-box;
  }

  .app-content-section {
    position: relative;
    width: 100%;
    display: flex;
    box-sizing: border-box;
  }

  .app-logo {
    width: 64px;
    height: 64px;
    margin: 4px 24px 4px 4px;
    border-radius: 50%;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.08);
  }

  .app-title {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: var(--font-primary);
  }

  .app-description {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.75rem;
    color: var(--font-primary);
  }

  .app-info {
    position: relative;
    width: 100%;
    max-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    border: solid 24px transparent;
    border-top: 0;
    box-sizing: border-box;
    overflow-x: auto;
    white-space: nowrap;
  }

  .app-info-section {
    display: flex;
    gap: 24px;
  }

  .github-link {
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: inline-flex;
    align-items: center;
  }

  .app-demo {
    position: absolute;
    display: flex;
    align-items: center;
    right: 0;
    bottom: 6px;
    margin: 18px 24px;
    padding: 10px 16px;
    border-radius: 4px;
    color: #ffffff;
    background-color: var(--font-link);
    transition: all 0.2s;
  }

  .app-demo:hover,
  .app-demo:focus,
  .app-demo:active {
    background-color: var(--font-link-hover);
  }

  @media (max-width: 768px) {
    .showcase {
      border-radius: 0;
    }

    .app-content {
      flex-direction: column;
    }

    .app-logo {
      width: 48px;
      height: 48px;
    }

    .app-demo {
      position: relative;
      margin: 24px 0 0 auto;
      width: fit-content;
    }
  }

  @media (max-width: 426px) {
    .app-demo {
      position: relative;
      bottom: 0;
      margin: 24px 0 0 0;
      width: auto;
      text-align: center;
      justify-content: center;
    }
  }
</style>

<div class="showcase">
  <div class="app-content">
    <div class="app-content-section">
      <img src={app.logo} alt="App Logo" class="app-logo" />
      <section>
        <h3 class="app-title">{app.title}</h3>
        <p class="app-description">{app.description}</p>
      </section>
    </div>

    <a
      href={app.homepage}
      target="_blank"
      rel="noopener noreferrer"
      class="app-demo">
      打开应用
    </a>
  </div>
  <div class="app-info">
    <section class="app-info-section">
      <Language type="showcase" />
      <StatusBar type="showcase" />
      <span class="github-link">
        <Icons name="github" />
        <a
          href={app.html_url}
          target="_blank"
          rel="noopener noreferrer"
          class="github-link">
          View on GitHub
        </a>
      </span>
    </section>
    <section class="app-info-section">
      <Releases />
    </section>
  </div>

  <Images />
</div>
