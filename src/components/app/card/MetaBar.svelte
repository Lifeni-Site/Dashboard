<script lang="ts">
  import Language from '../common/Language.svelte'
  import LastUpdate from '../common/LastUpdate.svelte'
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
</style>

<div class="card-meta">
  <Language type="card" />
  <LastUpdate type="card" />
</div>
