<script>
  import {started} from "./store";
  import {data} from './utils/data';

  import Started from "./lib/Started.svelte";
  import GuessWord from "./lib/GuessWord.svelte";


  let condition = 'false';

  started.subscribe(value => condition = value)
</script>

<main>
  {#if condition === "true"}
    <div>
      <h2>{data[0].mainPhrase}</h2>
      <GuessWord answer={data[0].secretWord} />
    </div>
  {:else}
    <Started />
  {/if}
</main>

<style>
  h2 {
    margin-bottom: 50px;
  }
</style>
