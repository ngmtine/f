import esbuild from "esbuild";

await esbuild
    .build({
        entryPoints: ["src/main.ts"],
        outfile: "dist/main.js",
        platform: "node",
        target: "node21",
        bundle: true,
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });

