<script>
    let guessingWord = ""
    let fakeBorderClass = "inactive"
    let guessedWords = []
    export let answer;

    const changeClass = () => {
        fakeBorderClass = fakeBorderClass === "inactive" ? "active" : "inactive"
    }

    const guessWord = () => {
        if (guessingWord !== answer) {
            guessedWords = [...guessedWords, guessingWord];
            guessingWord = ""
        }
    }
</script>

<div>
    <input type="text" class="guess-input" bind:value={guessingWord} on:focus={changeClass} on:blur={changeClass} />
    <div class="fake-border {fakeBorderClass}" />
    <button on:click={guessWord} >Adivinar</button>
    <ul class="wrong-words">
        {#each guessedWords as item}
            <li class="wrong-word">{item}</li>
        {/each}
    </ul>
</div>

<style>
    .guess-input {
        width: 340px;
        font-size: 32px;
        text-align: center;
        border: none;
        outline: none;
        background-color: inherit;
        font-weight: bold;
        font-family: 'Space Grotesk', sans-serif;
    }

    .fake-border {
        width: 100%;
        height: 3px;
        border-radius: 100px;
        margin-bottom: 30px;
    }

    .inactive {
        background-color: var(--primary-color);
    }

    .active {
        background-color: var(--third-color);
    }

    .wrong-words {
        margin-top: 50px;
        list-style: none;
        padding: 0;
    }

    .wrong-word {
        font-size: 32px;
        color: var(--third-color);
        text-decoration: line-through;
        line-height: normal;
    }
</style>