<script type="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import { getContext } from 'svelte'
  import { showcase } from '../../../context'
  import Icons from '../../other/Icons.svelte'
  const { getApp } = getContext(showcase)
  const app = getApp()

  let releases = []
  const fetchData = async () => {
    const fetchReleases = await fetch(
      `https://api.github.com/repos/Lifeni/${app.name}/releases`
    )
    releases = await fetchReleases.json()

    return releases[0]
  }
</script>

<style>
  .app-version {
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: inline-flex;
    align-items: center;
    color: var(--font-secondary);
  }

  .release-at {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--font-secondary);
    display: inline-flex;
    align-items: center;
  }
</style>

{#await fetchData()}
  <span>Loading ...</span>
{:then data}
  <span class="app-version">
    <Icons name="tag" />{data.tag_name}
  </span>
  <span class="release-at">{dayjs(data.published_at).fromNow()}</span>
{/await}
