import {createInterface, type Interface} from "readline";
import {getCommands} from "./commands.js";
import {PokeAPI, ShallowLocations} from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    registry: Record<string, CLICommand>;
    api: PokeAPI;
    prevLocationsIndex?: number;
    nextLocationsIndex: number;
    storedLocations: ShallowLocations[];
}

export function initState(): State {
    const api = new PokeAPI();
    return {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        registry: getCommands(),
        api: api,
        nextLocationsIndex: 1,
        storedLocations: [],
    };
}