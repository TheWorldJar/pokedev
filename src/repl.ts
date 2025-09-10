import { createInterface } from "readline";

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
            console.log(`Your command was: ${cleanInput(input)[0]}`);
        }
        rl.prompt();
    });
}
