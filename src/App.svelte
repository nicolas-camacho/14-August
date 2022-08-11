<script>
  import Started from "./lib/Started.svelte";
  import {started} from "./store";

  let condition = 'false';

  started.subscribe(value => condition = value)
</script>

<main>
  {#if condition === "true"}
    <h1>Done</h1>
  {:else}
    <Started />
  {/if}
</main>

<style>
  main {
    margin: 0 auto;
    max-width: 365px;
    display: flex;
    justify-content: center;
  }
</style>
