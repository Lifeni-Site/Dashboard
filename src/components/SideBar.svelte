<aside>
  <section class="about" id="about">
    <h3># 你好</h3>
    <p>这是一个简单的展示页面，我会在这里展示一些我做的开源项目。</p>
    <p>
      这里的大部分项目都是按照自己的需求做的，所以应该会一直维护下去，如果你有好的想法，欢迎和我联系或者提
      Issue。
    </p>
    <h3># 关于我</h3>
    <p>
      我比较感兴趣的是 Web 前端开发，目前正在学习 TypeScript
      和前端的各种框架，也在尝试使用 Electron 和 React Native
      做一些跨平台的应用。
    </p>
  </section>
</aside>

<style lang="less">
  :global(aside) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    width: 30%;
    height: 100%;
    min-height: 100vh;
    padding: 168px 72px 0 72px;
    display: flex;
    flex-direction: column;
    background: var(--background-1);
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.2s;

    &::after {
      content: '';
      display: block;
      min-height: 56px;
    }

    @media (max-width: 1120px) {
      padding: 152px 48px 0 48px;

      &::after {
        min-height: 48px;
      }
    }

    @media (max-width: 824px) {
      width: 72px;
      padding: 72px 0 0 0;
      background: var(--background-1);
      overflow: hidden;
      pointer-events: none;

      &::after {
        min-height: 72px;
      }

      &.expand {
        width: calc(360px + 128px);
        padding: 72px 64px 0 136px;
        background-color: var(--background-1);
        box-shadow: none;
        overflow-x: hidden;
        overflow-y: auto;
        pointer-events: initial;

        &::after {
          min-height: 72px;
        }
      }
    }

    @media (max-width: 480px) {
      bottom: 0;
      top: unset;
      width: 100%;
      height: 0;
      min-height: unset;
      border-radius: 36px 36px 0 0;
      z-index: 3000;
      padding: 0 48px;
      background-color: var(--background-4);
      overflow: hidden;

      &::after {
        min-height: 0;
      }

      &.expand {
        width: 100%;
        height: calc(100vh - 128px);
        padding: 48px 48px 0 48px;
        background-color: var(--background-4);

        &::after {
          min-height: 48px;
        }
      }
    }

    section {
      @media (max-width: 824px) {
        width: 100%;
        min-width: calc(360px - 36px - 36px);
      }

      p {
        margin: 1rem 0;
        font-size: 1rem;
        line-height: 2rem;
      }

      :global(a) {
        color: var(--font-link);
        border-top: solid 1px transparent;
        border-bottom: solid 1px transparent;
        transition: all 0.2s;
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
          color: var(--font-link-hover);
          border-top: solid 1px transparent;
          border-bottom: solid 1px var(--font-link-hover);
        }
      }
    }
  }

  .about {
    position: relative;
    z-index: 200;
    padding: 0;
    color: var(--font-primary);
    background-color: transparent;
    flex: unset;
    word-break: break-all;
    transition: all 0.2s;

    h3 {
      padding: 1rem 0 0 0;
      line-height: 2rem;
      font-size: 1rem;
      display: inline-block;
    }

    h3:first-of-type {
      padding: 0;
    }

    p {
      vertical-align: baseline;
    }

    @media (min-width: 769px) {
      flex: 1;
      color: var(--font-secondary);
      padding: 0;

      :global(a) {
        color: var(--font-secondary);
        transition: all 0.2s;
      }

      &:hover {
        color: var(--font-primary);
        transition: all 0.2s;

        :global(a) {
          color: var(--font-link);
          transition: all 0.2s;
        }
      }
    }
  }
</style>
