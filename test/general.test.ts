import test from "node:test";
import { abc } from "../src/index.js";
import assert from "node:assert/strict";

test("abc() === 1", () => {
	assert.equal(abc(), 1, "abc() is not 1");
});
