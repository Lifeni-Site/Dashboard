<script lang="ts" async>
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import apps from '../assets/apps.json'
  import Icons from './Icons.svelte'

  let loading = true
  let repos = []
  fetch(`https://api.github.com/users/Lifeni/repos`)
    .then(res => res.json())
    .then(data => {
      repos = data
      loading = false
    })
</script>

<div class="project-list" id="main-content">
  {#each apps as app}
    {#if app.display}
      <div class="project">
        <span class="date">
          {#if loading}
            Loading ...
          {:else}
            更新于 {dayjs(
              repos.find(repo => repo.name === app.name).updated_at
            ).fromNow()}
          {/if}
        </span>
        <a
          href={app.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={app.title}
        >
          <span class="title">{app.title}</span>
        </a>

        <div class="info">
          {#each app.topics as topic}
            <span class="tag">
              # {topic}
            </span>
          {/each}
        </div>
        <p class="description">
          {#each app.descriptions as description, index}
            <span>
              {description}
              {#if index !== app.descriptions.length - 1}
                <br />
              {/if}
            </span>
          {/each}
        </p>
        <p class="app-links">
          {#each app.links as link}
            <a
              class="app-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <Icons name={link.type} />
              {link.name}
            </a>
          {/each}
        </p>
      </div>
    {/if}
  {/each}
</div>

<style lang="less">
  .project-list {
    position: relative;
    width: 100%;

    .project {
      position: relative;
      width: 100%;
      max-width: 100%;
      margin: 0 0 36px 0;
      padding: 0 0 36px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-size: 1rem;
      line-height: 2rem;
      color: var(--font-primary);
      border-bottom: solid 2px var(--border-0);
      transition: all 0.2s;

      @media (max-width: 480px) {
        margin: 0 0 24px 0;
        padding: 0 0 24px 0;
      }

      &:last-child {
        border: none;
        margin: 0;
        padding: 0;
      }

      a {
        position: relative;
        width: fit-content;
        max-width: 100%;
        display: flex;
        text-decoration: none;
      }

      .title {
        position: relative;
        width: fit-content;
        max-width: 100%;
        font-size: 1.5rem;
        line-height: 2.5rem;
        font-weight: bold;
        color: var(--font-primary);
        transition: all 0.2s;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;

        @media (max-width: 480px) {
          font-size: 1.375rem;
          line-height: 2rem;
          padding: 0.25rem 0;
        }
      }

      .info {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tag {
        padding: 0 1rem 0 0;
        color: var(--font-secondary);
      }

      .date {
        padding: 0 1rem 0 0;
        font-weight: bold;
        white-space: nowrap;
        transition: all 0.2s;
      }

      .description {
        width: 100%;
        margin-top: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media (max-width: 480px) {
          margin: 0;
        }
      }

      .app-links {
        width: 100%;
        display: flex;
        align-items: center;

        .app-link {
          margin: 4px 1.5rem 4px 0;
          display: flex;
          align-items: center;
          line-height: initial;
          color: var(--font-link);
          border-top: solid 1px transparent;
          border-bottom: solid 1px transparent;
          transition: all 0.2s;
        }

        .app-link:hover,
        .app-link:active,
        .app-link:focus {
          color: var(--font-link-hover);
          border-top: solid 1px transparent;
          border-bottom: solid 1px var(--font-link-hover);
        }
      }
    }
  }
</style>
