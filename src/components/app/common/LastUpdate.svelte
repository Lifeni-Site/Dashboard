<script lang="ts">
  import dayjs from 'dayjs'
  import relativeTime from 'dayjs/plugin/relativeTime'
  import 'dayjs/locale/zh-cn'

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  import { getContext } from 'svelte'
  import { card, showcase } from '../../../context'

  export let type: string
  let repo: IRepo, app: IApp

  if (type === 'card') {
    const { getRepo } = getContext(card)
    repo = getRepo()
  } else if (type === 'showcase') {
    const { getApp } = getContext(showcase)
    app = getApp()
  }
</script>

<span class="last-update"> {dayjs((repo || app).pushed_at).fromNow()} </span>
