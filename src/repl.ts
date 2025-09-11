import { createInterface } from "readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(/\s+/);
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    rl.on("line", (input) => {
        if (input !== "") {
            let userCommand = cleanInput(input)[0];
            if (userCommand in getCommands()) {
                getCommands()[userCommand].callback();
            }
        }
        rl.prompt();
    });
}
