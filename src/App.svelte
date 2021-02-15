<script lang="ts">
  // import Footer from './components/Footer.svelte'
  import Header from './components/Header.svelte'
  import ProjectList from './components/ProjectList.svelte'
  import SideBar from './components/SideBar.svelte'
  import Utterances from './components/Utterances.svelte'
</script>

<noscript>
  <div class="top-bar">JavaScript 已被禁用，部分功能不可用</div>
</noscript>

<a href="#main-content" class="skip-link">
  Skip to main content | 跳转到主要内容
</a>

<Header />
<main>
  <SideBar />
  <div class="container">
    <ProjectList />
    <Utterances />
  </div>
</main>

<style lang="less">
  main {
    position: relative;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .container {
    position: relative;
    width: 100%;
    max-width: calc(30% + 900px);
    padding: 56px 72px 56px calc(30% + 72px);
    background: var(--background-0);
    transition: all 0.2s;

    @media (max-width: 1120px) {
      padding: 48px 48px 48px calc(30% + 48px);
    }

    @media (max-width: 824px) {
      padding: 48px 48px 48px calc(72px + 48px);
    }

    @media (max-width: 600px) {
      padding: 48px 36px 48px calc(72px + 36px);
    }

    @media (max-width: 480px) {
      padding: 120px 36px 48px 36px;
    }

    @media (max-width: 420px) {
      padding: 120px 32px 48px 32px;
    }
  }

  .skip-link {
    position: fixed;
    z-index: 9999;
    top: -48px;
    left: 16px;
    height: 40px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    color: var(--font-link);
    background-color: var(--background-0);
    text-decoration: none;
    opacity: 0;
    transition: all 0.2s;
  }

  .skip-link:active,
  .skip-link:focus {
    top: 16px;
    opacity: 1;
  }

  .top-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    padding: 12px;
    font-size: 0.875rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
    background-color: #feeb44e0;
    backdrop-filter: blur(4px);
  }
</style>
