<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import { getContext } from 'svelte'
  import { global, card } from '../context'

  const { getRepo } = getContext(card)
  const { getColor } = getContext(global)
  const repo = getRepo()
</script>

<style>
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
</style>

<div class="card-meta">
  <span class="language">
    <span
      aria-hidden="true"
      class="language-point"
      style="background-color: {getColor(repo.language)}" />
    {repo.language}
  </span>
  <span class="last-update"> {dayjs(repo.pushed_at).fromNow()} </span>
</div>
