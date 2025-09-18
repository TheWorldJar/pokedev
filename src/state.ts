import {createInterface, type Interface} from "readline";
import {getCommands} from "./commands.js";
import {PokeAPI, Pokemon} from "./pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    registry: Record<string, CLICommand>;
    api: PokeAPI;
    prevLocationsURL: string | null;
    nextLocationsURL: string | null;
    pokedex: Map<string, Pokemon>;
}

export function initState(): State {
    const api = new PokeAPI();
    const pokedex = new Map<string, Pokemon>();
    return {
        readline: createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "Pokedex > ",
        }),
        registry: getCommands(),
        api: api,
        prevLocationsURL: null,
        nextLocationsURL: "https://pokeapi.co/api/v2/location-area/",
        pokedex: pokedex,
    };
}