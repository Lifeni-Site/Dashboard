<script lang="ts">
  let show = false
  document.addEventListener('DOMContentLoaded', () => {
    show = true
  })
</script>

{#if show}
  <div class="comment" id="comment">
    <script
      src="https://utteranc.es/client.js"
      repo="Lifeni-Site/Comment"
      issue-term="dashboard/home"
      theme="preferred-color-scheme"
      crossorigin="anonymous"
      async>
    </script>
  </div>
{/if}

<style lang="less">
  .comment {
    margin: 0 -8px;
    padding: 48px 0 0 0;
  }
</style>
