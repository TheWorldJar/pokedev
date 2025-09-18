import {State} from "./state.js";

export async function commandInspect(state: State, pokemon: string) {
    if (pokemon) {
        if (state.pokedex.has(pokemon)) {
            const details = await state.api.fetchPokemonFull(pokemon);
            console.log(
                `Name: ${details?.name}\nHeight: ${details?.height}\nWeight: ${details?.weight}\nStats:`
            )
            for (const stat of details?.stats) {
                console.log(`\t- ${stat.stat.name}: ${stat.base_stat}`);
            }
            console.log("Types:");
            for (const type of details?.types) {
                console.log(`\t- ${type.type.name}`);
            }
        } else {
            console.log(`You must catch ${pokemon} first!`);
        }
    } else {
        console.log("Please specify a pokemon");
    }
}