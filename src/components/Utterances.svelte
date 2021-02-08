<script lang="ts">
  document.addEventListener('DOMContentLoaded', () => {
    const comment = document.querySelector('#comment')
    if (comment) {
      const utterances = document.createElement('script')
      utterances.setAttribute('src', 'https://utteranc.es/client.js')
      utterances.setAttribute('repo', 'Lifeni-Site/Comment')
      utterances.setAttribute('issue-term', 'dashboard/home')
      utterances.setAttribute('theme', 'preferred-color-scheme')
      utterances.setAttribute('crossOrigin', 'anonymous')
      utterances.setAttribute('async', 'true')
      comment.appendChild(utterances)
    }
  })
</script>

<div class="comment" id="comment" />

<style lang="less">
  .comment {
    margin: 0 -8px;
    padding: 48px 0 0 0;
  }
</style>
