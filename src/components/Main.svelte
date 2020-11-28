<script lang="ts">
  import Card from './Card.svelte';
  import Placeholder from './Placeholder.svelte';
</script>

<style>
  main {
    width: 100%;
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 360px);
    gap: 24px;
    place-content: center;
    place-items: center;
    box-sizing: border-box;
  }
</style>

<main>
  <!-- <Card /> -->
  <!-- <Card /> -->
  <!-- <Card /> -->
  <Placeholder />
</main>
