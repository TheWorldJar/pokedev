import {State} from "./state.js";

export async function commandMap(state: State) {
    const locations = await state.api.fetchLocations(state.nextLocationsURL);
    state.prevLocationsURL = locations.previous;
    state.nextLocationsURL = locations.next;
    for (const result of locations.results) {
        console.log(result.name);
    }
}

export async function commandMapb(state: State) {
    const locations = await state.api.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = locations.previous;
    state.nextLocationsURL = locations.next;
    for (const result of locations.results) {
        console.log(result.name);
    }
}