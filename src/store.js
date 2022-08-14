import { writable } from "svelte/store";

const storedStarted = localStorage.getItem("started");
export const started = writable( storedStarted || 'false');

const storedStep = localStorage.getItem("step");
export const step = writable( storedStep || '0' );

started.subscribe(value => {
    localStorage.setItem("started", value);
});

step.subscribe(value => {
    localStorage.setItem("step", value);
})