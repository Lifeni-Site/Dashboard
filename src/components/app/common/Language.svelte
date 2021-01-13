<script lang="ts">
  import { getContext } from 'svelte'
  import { global, card, showcase } from '../../../context'

  const { getColor } = getContext(global)

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

<style>
  .language {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .language-point {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0 0;
    display: inline-block;
    border-radius: 50%;
  }
</style>

<span class="language">
  <span
    aria-hidden="true"
    class="language-point"
    style="background-color: {getColor((repo || app).language)}" />
  {(repo || app).language}
</span>
