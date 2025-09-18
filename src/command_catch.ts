import {State} from './state.js';

export async function commandCatch(state: State, pokemon: string) {
    if (pokemon) {
        const details = await state.api.fetchPokemon(pokemon);
        const catchAttempt = Math.floor(Math.random() * 255);
        if (catchAttempt <= details.capture_rate) {
            state.pokedex.set(pokemon, details);
            console.log(`${pokemon} was caught!`);
        } else {
            console.log(`${pokemon} escaped!`);
        }
    } else {
        console.log("Please specify a pokemon!");
    }
}