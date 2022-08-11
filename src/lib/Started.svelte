<script>
    import {started} from '../store.js';

    const setStart = () => {
        started.set('true')
    }
</script>

<div class="started">
    <h1>Hola Dayana</h1>
    <p>Cree esta pequeña actividad para el día de hoy, no es algo muy elaborado, pero si queria que fuera algo
        relativamente especial y un poco diferente.
    </p>
    <button on:click={setStart}>Comencemos</button>
</div>

<style>
    .started {
        text-align: center;
        display: grid;
        place-items: center;
    }
</style>