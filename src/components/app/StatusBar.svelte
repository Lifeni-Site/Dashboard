<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import { getContext } from 'svelte'
  import { global, card } from '../../context'
  import Icons from '../global/Icons.svelte'

  const { getColor } = getContext(global)
  const { getApp } = getContext(card)

  const app = getApp()

  let tags = []
  const fetchData = async () => {
    const fetchTags = await fetch(
      `https://api.github.com/repos/Lifeni/${app.name}/tags`
    )
    tags = await fetchTags.json()
    return tags[0]
  }
</script>

<style>
  .card-status-bar {
    width: 100%;
    padding: 24px 0 0 0;
    border-left: solid 24px transparent;
    border-right: solid 24px transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--font-secondary);
    gap: 16px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    box-sizing: border-box;
    overflow-x: auto;
  }

  .card-status-bar section {
    display: flex;
    align-items: center;
    gap: 16px;
    white-space: nowrap;
  }

  .language {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }

  .language-point {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    border-radius: 50%;
  }

  .last-update {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }

  .app-version {
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: inline-flex;
    align-items: center;
    color: var(--font-secondary);
  }

  .license,
  .star-count,
  .fork-count,
  .issues-count {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
  }
</style>

<div class="card-status-bar">
  <section>
    <span class="language">
      <span
        aria-hidden="true"
        class="language-point"
        style="background-color: {getColor(app.language)}" />
      {app.language}
    </span>

    {#if app.license?.spdx_id}
      <span class="license">
        <Icons name="license" />
        {app.license.spdx_id}
      </span>
    {/if}
    {#if app.stargazers_count !== 0}
      <span class="star-count">
        <Icons name="star" />
        {app.stargazers_count}
      </span>
    {/if}
    {#if app.forks_count !== 0}
      <span class="fork-count">
        <Icons name="fork" />
        {app.forks_count}
      </span>
    {/if}
    {#if app.open_issues_count !== 0}
      <span class="issues-count">
        <Icons name="issues" />
        {app.open_issues_count}
      </span>
    {/if}

    {#await fetchData()}
      <span>Loading ...</span>
    {:then data}
      <span class="app-version">
        <Icons name="tag" />{data.name}
      </span>
    {/await}
  </section>
  <section>
    <span class="last-update"> {dayjs(app.pushed_at).fromNow()} </span>
  </section>
</div>
