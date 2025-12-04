console.log(`Native bun run`);
require("./bug.ts");

console.log(`Run with target for node`);
require("../dist/node/bug.js");

console.log(`Run with target for bun`);
require("../dist/bun/bug.js");
