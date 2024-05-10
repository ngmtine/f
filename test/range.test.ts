import f from "../src/main";

const log = (str: string, passed: boolean) => (passed ? console.log(str) : console.warn(str));

const testCases = [
    { input: [0, 10, 2], expected: [0, 2, 4, 6, 8] },
    { input: [5, 15, 3], expected: [5, 8, 11, 14] },
    { input: [0, 5, 1], expected: [0, 1, 2, 3, 4] },
    { input: [10, 0, -2], expected: [10, 8, 6, 4, 2] },
];

const runTests = () => {
    let allTestsPassed = true;

    let idx = 0;
    for (const { input, expected } of testCases) {
        idx++;
        const result = Array.from(f.range(...(input as [number, number, number])));
        const passed = JSON.stringify(result) === JSON.stringify(expected);

        log(`Test ${idx}: ${passed ? "PASSED" : "FAILED"}`, passed);
        log(`    Input: ${input}`, passed);
        log(`    Expected: ${expected}`, passed);
        log(`    Result: ${result}`, passed);
        console.log("");

        if (!passed) allTestsPassed = false;
    }

    const msg = allTestsPassed ? "All tests passed!!" : "Some tests failed.";
    log(msg, allTestsPassed);
};

runTests();
