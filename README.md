# js-lib-template

This template is a small TypeScript library setup for Node.js.

## Packages used

- `typescript` - the TypeScript compiler.
- `tsup` - bundles the library into CommonJS and ESM output in `dist/`.
- `tsx` - runs the test files directly without a separate compile step.
- `@types/node` - provides TypeScript type definitions for Node.js APIs.

## What they are used for

- Source code lives in `src/` and is written in TypeScript.
- `npm run bundle` uses `tsup` to produce the build output in `dist/`.
- `npm test` uses `tsx` to execute the tests in `test/`.
- `@types/node` lets the TypeScript compiler understand Node built-ins like `node:test` and `node:assert`.

The template also includes a small example export in [`src/index.ts`](./src/index.ts) and a matching test in [`test/general.test.ts`](./test/general.test.ts).
