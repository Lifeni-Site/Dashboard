<script lang="ts">
  document.addEventListener('DOMContentLoaded', () => {
    const openSidebar = <HTMLButtonElement>(
      document.querySelector('#expand-aside')
    )
    console.log(openSidebar)

    if (openSidebar) {
      openSidebar.onclick = () => {
        console.log(1)

        const aside = document.querySelector('aside')
        const header = document.querySelector('header')
        aside.classList.toggle('expand')
        header.classList.toggle('expand')
      }
    }
  })
</script>

<header>
  <a
    class="fab auto-width"
    href="https://github.com/Lifeni"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24"
      height="24"
      ><path
        fill-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      /></svg
    >
    <span class="text">我的 GitHub</span>
  </a>

  <button
    id="expand-aside"
    class="mobile-only expand-aside"
    aria-label="展开侧栏"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path
        fill-rule="evenodd"
        d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
      />
    </svg>
  </button>
</header>

<style lang="less">
  :global(header) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    width: 30%;
    height: auto;
    padding: 56px 72px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: transparent;
    font-size: 1.125rem;
    pointer-events: none;
    transition: all 0.2s;

    @media (max-width: 1120px) {
      padding: 48px;
    }

    .text {
      display: flex;
      font-size: 1.15rem;
      margin: 0 8px 0 20px;
      pointer-events: auto;
    }

    a,
    button {
      width: 72px;
      height: 72px;
      padding: 24px;
      margin: 0;
      border: none;
      border-radius: 36px;
      display: flex;
      align-items: center;
      line-height: 24px;
      background-color: var(--background-0);
      text-decoration: none;
      cursor: pointer;
      pointer-events: auto;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      outline: none;
      color: var(--font-primary);
      font-family: inherit;
      transition: all 0.2s;

      svg {
        fill: var(--font-primary);
        transition: all 0.2s;
      }
    }

    button.mobile-only {
      display: none;
    }

    a.auto-width {
      width: auto;
    }

    @media (max-width: 824px) {
      top: 0;
      left: 0;
      right: unset;
      bottom: unset;
      width: 72px;
      min-height: 100vh;
      padding: 0;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--background-1);
      transition: all 0.2s;

      .text {
        display: none;
      }

      &.expand {
        background-color: var(--background-0);
      }

      a,
      button {
        margin: 0;
        border-radius: 0;
        background-color: transparent;
      }

      button.mobile-only {
        display: flex;
      }

      a:active,
      a:focus,
      a:hover,
      button:active,
      button:focus,
      button:hover {
        background-color: var(--background-1);
      }
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 128px;
      min-height: unset;
      padding: 28px 24px;
      flex-direction: row;
      justify-content: space-between;
      background-color: transparent;

      .text {
        display: inline-block;
      }

      &.expand {
        background-color: transparent;
      }

      a,
      button {
        width: 72px;
        height: 72px;
        margin: 0;
        border-radius: 72px;
        background-color: var(--background-4);
      }

      a.auto-width {
        width: auto;
      }

      a.fab {
        box-shadow: none;
      }

      a:active,
      a:focus,
      a:hover,
      button:active,
      button:focus,
      button:hover {
        background-color: var(--background-2);
      }
    }

    a:active,
    a:focus,
    a:hover,
    button:active,
    button:focus,
    button:hover {
      background-color: var(--background-2);
    }
  }
</style>
