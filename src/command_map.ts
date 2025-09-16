import {State} from "./state.js";

export async function commandMap(state: State) {
    const page = (state.nextLocationsIndex - 1) / 20;
    if (page > 0 && page < state.storedLocations.length) {
        for (let area of state.storedLocations[page - 1].locations) {
            console.log(area.details["name"]);
        }
    } else {
        const areas = await state.api.fetchLocations(state.nextLocationsIndex);
        state.storedLocations.push(areas);
        for (let area of areas.locations) {
            console.log(area.details["name"]);
        }
    }
    state.prevLocationsIndex = state.nextLocationsIndex;
    state.nextLocationsIndex += 20;
}

export async function commandMapb(state: State) {
    if (state.storedLocations.length > 0 && state.nextLocationsIndex > 20) {
        state.nextLocationsIndex = state.nextLocationsIndex - 20 > 20 ? state.nextLocationsIndex - 20: 21;
        state.prevLocationsIndex = state.nextLocationsIndex > 20 ? state.nextLocationsIndex - 20:1;
        const previousPage = ((state.nextLocationsIndex - 1) / 20) - 1;
        for (let area of state.storedLocations[previousPage].locations) {
            console.log(area.details["name"]);
        }
    } else {
        await commandMap(state);
    }
}