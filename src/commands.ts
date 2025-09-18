import {commandExit} from "./commands/command_exit";
import {commandHelp} from "./commands/command_help";
import {commandMap, commandMapb} from "./commands/command_map";
import {CLICommand} from "./state.js";
import {commandExplore} from "./commands/command_explore";
import {commandCatch} from "./commands/command_catch";
import {commandPokedex} from "./commands/command_pokedex";

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
        // can add more commands here.
    };
}
