import {State} from "../state";

export async function commandPokedex(state: State) {
    console.log("Your Pokedex:");
    if (state.pokedex.size > 0) {
        state.pokedex.forEach((_, key: string) => {
            console.log(` - ${key}`);
        })
    } else {
        console.log("...Is empty!");
    }
}