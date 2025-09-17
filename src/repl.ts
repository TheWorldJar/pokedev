import { type State } from "./state.js";

export function cleanInput(input: string): string[] {
    return input.trim().toLowerCase().split(/\s+/);
}

export async function startREPL(state: State) {
    state.readline.prompt();
    state.readline.on("line", async (input) => {
        try {
            if (input !== "") {
                const cleanedInput = cleanInput(input);
                const userCommand = cleanedInput[0];
                const userArgs = cleanedInput.slice(1);
                if (userCommand in state.registry) {
                    await state.registry[userCommand].callback(state, ...userArgs);
                    }
                }
        }
        catch (error) {
            console.error(`Error: ${error}`);
        }
        state.readline.prompt();
    });
}
