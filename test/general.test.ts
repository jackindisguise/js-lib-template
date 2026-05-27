import test from "node:test";
import abc, { abc as abc2 } from "../src/index.js";
import assert from "node:assert/strict";

test("abc() === abc2()", () => {
	assert(abc() === abc2());
});
