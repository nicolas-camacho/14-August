<script>
  import {started, step} from "./store";
  import {data} from './utils/data';

  import Started from "./lib/Started.svelte";
  import GuessWord from "./lib/GuessWord.svelte";


  let condition = 'false';
  let actualStep = 0;

  started.subscribe(value => condition = value);
  step.subscribe(value => actualStep = parseInt(value, 10));

  console.log(actualStep)
</script>

<main>
  {#if actualStep > 13}
    <h1>Gracias! c:</h1>
  {:else}
    {#if condition === "true"}
      <div class="container">
        <h2>{data[actualStep].mainPhrase}</h2>
        <GuessWord answer={data[actualStep].secretWord} />
      </div>
    {:else}
      <Started />
    {/if}
  {/if}
</main>

<style>
  h2 {
    margin-bottom: 50px;
  }
</style>
