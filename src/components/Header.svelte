<script lang="ts">
  import { onMount } from 'svelte'

  onMount(() => {
    const openSidebar = <HTMLButtonElement>(
      document.querySelector('#expand-aside')
    )

    if (openSidebar) {
      openSidebar.onclick = () => {
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
    <span class="text">GitHub</span>
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
        d="M4.801 3.57A1.75 1.75 0 016.414 2.5h11.174c.702 0 1.337.42 1.611 1.067l3.741 8.828c.04.092.06.192.06.293v7.562A1.75 1.75 0 0121.25 22H2.75A1.75 1.75 0 011 20.25v-7.5c0-.1.02-.199.059-.291L4.8 3.571zM6.414 4a.25.25 0 00-.23.153L2.88 12H8a.75.75 0 01.648.372L10.18 15h3.638l1.533-2.628a.75.75 0 01.64-.372l5.13-.051-3.304-7.797a.25.25 0 00-.23-.152H6.414zM21.5 13.445l-5.067.05-1.535 2.633a.75.75 0 01-.648.372h-4.5a.75.75 0 01-.648-.372L7.57 13.5H2.5v6.75c0 .138.112.25.25.25h18.5a.25.25 0 00.25-.25v-6.805z"
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
      min-height: 100%;
      padding: 48px 0;
      flex-direction: column;
      justify-content: space-between;
      border-right: solid 2px var(--border-0);
      background-color: var(--background-0);
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
        background-color: var(--background-1) !important;
      }
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 72px;
      min-height: unset;
      padding: 0 10px;
      border-bottom: solid 2px transparent;
      flex-direction: row;
      justify-content: space-between;
      background-color: var(--background-4);
      overflow: hidden;

      .text {
        display: inline-block;
      }

      &.expand {
        background-color: var(--background-4);
      }

      a,
      button {
        width: 72px;
        height: 72px;
        margin: 0;
        border-radius: 0;
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
        background-color: var(--background-4) !important;
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
