import { writable } from "svelte/store";

const storedStarted = localStorage.getItem("started");
export const started = writable( storedStarted || 'false');
started.subscribe(value => {
    localStorage.setItem("started", value);
});