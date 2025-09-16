import {commandExit} from "./command_exit.js";
import {commandHelp} from "./command_help.js";
import {commandMap, commandMapb} from "./command_map.js";
import {CLICommand} from "./state.js";

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
        }
        // can add more commands here.
    };
}
