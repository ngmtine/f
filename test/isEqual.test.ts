import f from "../src/main";

const log = (str: string, passed: boolean) => (passed ? console.log(str) : console.warn(str));

const testCases = [
    { input: [{ a: 1 }, { a: 1 }], expected: true },
    { input: [{ a: 1 }, { a: 2 }], expected: false },
    { input: [{ a: { b: 2 } }, { a: { b: 2 } }], expected: true },
    { input: [{ a: { b: 2 } }, { a: { b: 3 } }], expected: false },
    { input: [{ a: 1, b: 2 }, { a: 1 }], expected: false },
    { input: [null, null], expected: true },
    { input: [null, { a: 1 }], expected: false },
    { input: [{ a: undefined }, { a: undefined }], expected: true },
    { input: [{ a: undefined }, {}], expected: false },
];

const runTests = () => {
    let allTestsPassed = true;

    let idx = 0;
    for (const { input, expected } of testCases) {
        idx++;
        const result = f.isEqual(input[0], input[1]);
        const passed = result === expected;

        log(`Test ${idx}: ${passed ? "PASSED" : "FAILED"}`, passed);
        log(`    Input: ${JSON.stringify(input)}`, passed);
        log(`    Expected: ${expected}`, passed);
        log(`    Result: ${result}`, passed);
        console.log("");

        if (!passed) allTestsPassed = false;
    }

    const msg = allTestsPassed ? "All tests passed!!" : "Some tests failed.";
    log(msg, allTestsPassed);
};

runTests();
