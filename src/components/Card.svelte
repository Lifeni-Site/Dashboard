<script type="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  interface ILicense {
    name: string
    url: string
    spdx_id: string
    [propName: string]: any
  }
  interface IRepo {
    name: string
    description: string
    html_url: string
    homepage: string
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    language: string
    archived: boolean
    license: ILicense
    updated_at: string
    [propName: string]: any
  }

  export let repo: IRepo
  export let color: string
</script>

<style>
  .card {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    background-color: var(--background-0);
    overflow: hidden;
  }

  .card-meta {
    width: 100%;
    padding: 24px 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--font-secondary);
    font-size: 0.875rem;
    line-height: 1.25rem;
    box-sizing: border-box;
  }

  .language {
    display: flex;
    align-items: center;
  }

  .language-point {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    border-radius: 50%;
  }
  .card-content {
    padding: 24px;
    box-sizing: border-box;
  }

  .card-status-bar {
    display: flex;
    align-items: center;
  }

  .license,
  .star-count,
  .fork-count,
  .issues-count {
    margin: 0 0.7rem 0 0;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }

  .license svg,
  .star-count svg,
  .fork-count svg,
  .issues-count svg {
    margin: 0 0.5rem 0 0;
    fill: var(--font-secondary);
  }

  .card-title {
    margin: 0;
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

  .card-action-bar {
    padding: 0 24px 24px 24px;
  }

  .demo-link {
    margin: 0 0 0 1rem;
  }
</style>

<div class="card">
  <div class="card-meta">
    <span class="language">
      <span
        aria-hidden="true"
        class="language-point"
        style="background-color: {color}" />
      {repo.language}</span>
    <span class="last-update">{dayjs(repo.updated_at).fromNow()}</span>
  </div>
  <div class="card-content">
    <div class="card-status-bar">
      {#if repo.license.spdx_id}
        <span class="license">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"><path
              fill-rule="evenodd"
              d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z" /></svg>
          {repo.license.spdx_id}
        </span>
      {/if}
      {#if repo.stargazers_count !== 0}
        <span class="star-count">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"><path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z" /></svg>
          {repo.stargazers_count}
        </span>
      {/if}
      {#if repo.forks_count !== 0}
        <span class="fork-count">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"><path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
          {repo.forks_count}
        </span>
      {/if}
      {#if repo.open_issues_count !== 0}
        <span class="issues-count">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"><path
              fill-rule="evenodd"
              d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" /></svg>
          {repo.open_issues_count}
        </span>
      {/if}
    </div>
    <h3 class="card-title">{repo.name}</h3>
    <p class="card-description">{repo.description}</p>
  </div>
  <div class="card-action-bar">
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      class="github-link">
      GitHub
    </a>
    {#if !!repo.homepage}
      <a
        href={repo.homepage}
        target="_blank"
        rel="noopener noreferrer"
        class="demo-link">
        Demo
      </a>
    {/if}
  </div>
</div>
