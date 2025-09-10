import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "",
        expected: [""],
    },
    {
        input: "The quick brown fox jumps over the lazy dog.",
        expected: [
            "the",
            "quick",
            "brown",
            "fox",
            "jumps",
            "over",
            "the",
            "lazy",
            "dog.",
        ],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input);

        // The `expect` and `toHaveLength` functions are from vitest
        // they will fail the test if the condition is not met
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            // likewise, the `toBe` function will fail the test if the values are not equal
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
