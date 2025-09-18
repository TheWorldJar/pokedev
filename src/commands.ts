import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import {commandMap, commandMapb} from "./command_map.js";
import {CLICommand} from "./state.js";
import {commandExplore} from "./command_explore.js";
import {commandCatch} from "./command_catch.js";
import {commandPokedex} from "./command_pokedex.js";
import {commandInspect} from "./command_inspect.js";

export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Displays the 20 next areas in the location areas group",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "Displays the 20 previous ares in the location areas group",
            callback: commandMapb,
        },
        explore: {
            name: "explore",
            description: "Displays Pokemons encountered at the given location.",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempts to catch and add the specified Pokemon to the Pokedex",
            callback: commandCatch,
        },
        pokedex: {
            name: "pokedex",
            description: "Displays the user's Pokedex",
            callback: commandPokedex,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a Pokemon in the Pokedex",
            callback: commandInspect,
        }
        // can add more commands here.
    };
}
