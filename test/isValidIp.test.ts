import isValidIp from "../src/isValidIp";

const log = (str: string, passed: boolean) => (passed ? console.log(str) : console.warn(str));

const testCases = [
    // true
    { input: ["1.1.1.1"], expected: true },
    { input: ["255.255.255.255"], expected: true },
    { input: ["192.168.1.1"], expected: true },
    { input: ["0.0.0.0"], expected: true },
    { input: ["192.168.1.1", ["192.168.0.0", "192.168.255.255"]], expected: true },
    { input: ["10.0.0.1", ["10.0.0.0", "10.0.0.255"]], expected: true },
    { input: ["172.16.0.1", ["172.16.0.0", "172.31.255.255"]], expected: true },
    { input: ["192.0.2.1", ["192.0.2.0", "192.0.2.255"]], expected: true },

    // false
    // 範囲外
    { input: ["256.255.255.255"], expected: false },
    { input: ["10.0.0.256"], expected: false },
    // 不正な第1引数
    { input: [], expected: false },
    { input: [""], expected: false },
    { input: ["...."], expected: false },
    { input: ["10.0.0"], expected: false },
    { input: ["１.１.１.１"], expected: false },
    { input: ["あ"], expected: false },
    { input: ["あ.い.う.え"], expected: false },
    // 範囲外
    { input: ["192.168.1.1", ["10.0.0.0", "10.255.255.255"]], expected: false },
    { input: ["192.168.1.1", ["192.168.1.1", "192.168.1.0"]], expected: false },
    { input: ["172.16.0.0", ["172.16.0.1", "172.31.255.255"]], expected: false },
    { input: ["192.168.1.1", ["192.168.1.2", "192.168.1.3"]], expected: false },
    // 不正な第2引数
    { input: ["192.168.1.1", [""]], expected: false },
    { input: ["192.168.1.1", ["あいうえお"]], expected: false },
    { input: ["192.168.1.1", "192.168.1.0", "192.168.1.255"], expected: false },
    { input: ["192.168.1.1", ["10.0.0.0"]], expected: false },
    { input: ["192.168.1.1", ["192.168.0.0"]], expected: false },
];

const run = () => {
    let allTestsPassed = true;

    let idx = 0;
    for (const { input, expected } of testCases) {
        idx++;
        // @ts-ignore
        const result = isValidIp(...input);
        const passed = result === expected;

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

run();
