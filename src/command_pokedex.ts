import {State} from "./state.js";

export async function commandPokedex(state: State) {
    state.pokedex.forEach((_, key: string) => {
        console.log(` - ${key}`);
    })
}