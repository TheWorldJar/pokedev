import {State} from "../state";

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!");
    console.log(`Usage:\n`);
    for (let key in state.registry) {
        console.log(
            `${state.registry[key].name}: ${state.registry[key].description}`
        );
    }
}
