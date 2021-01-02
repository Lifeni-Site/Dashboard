<script lang="ts">
  export let type: string
</script>

<style>
  .repo-type-tag {
    margin: 0.2rem 0.4rem;
    padding: 0.15rem 0.5rem;
    display: inline-block;
    font-size: 0.5rem;
    line-height: 1rem;
    font-weight: bold;
    color: var(--font-secondary);
    border: solid 1px var(--background-2);
    border-radius: 16px;
  }
</style>

{#if type === 'archived'}<span class="repo-type-tag">Archived</span>{/if}
