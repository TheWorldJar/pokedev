import {State} from "../state";

export async function commandExplore(state: State, location: string) {
    if (location) {
        console.log(`Exploring ${location}`);
        const details = await state.api.exploreLocation(location);
        if(details["pokemon_encounters"]) {
            console.log("Found Pokemon:");
            details["pokemon_encounters"].forEach((encounter: { pokemon: { name: string; }; }) => {
                console.log(` - ${encounter.pokemon.name}`);
            })
        }
    } else {
        console.log("Provide a location to explore!");
    }
}