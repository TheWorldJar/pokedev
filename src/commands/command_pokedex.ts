import {State} from "../state";

export async function commandPokedex(state: State) {
    state.pokedex.forEach((_, key: string) => {
        console.log(` - ${key}`);
    })
}