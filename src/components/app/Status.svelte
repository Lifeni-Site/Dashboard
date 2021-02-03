<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import { getContext } from 'svelte'
  import { showcase } from '../../context'

  const { getApp } = getContext(showcase)
  const app = getApp()
</script>

<div class="app-status">
  <span class="last-update"
    >更新于
    {dayjs(app.pushed_at).fromNow()}
  </span>
</div>

<style>
  .app-status {
    width: 100%;
    padding: 4px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    color: var(--font-secondary);
    gap: 16px;
    font-size: 1rem;
    line-height: 1.5rem;
    box-sizing: border-box;
    overflow-x: auto;
  }
</style>
