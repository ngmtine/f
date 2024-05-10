import { execSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join } from "node:path";

const testDir = join(__dirname, "");

const testFiles = readdirSync(testDir).filter((file) => file.endsWith(".test.ts"));

for (const file of testFiles) {
    const filePath = join(testDir, file);
    console.log(`Running test: ${filePath}`);
    try {
        execSync(`ts-node --transpile-only ${filePath}`, { stdio: "inherit" });
    } catch (error) {
        console.error(`Error running test: ${filePath}`);
        console.error(error);
    }
}
