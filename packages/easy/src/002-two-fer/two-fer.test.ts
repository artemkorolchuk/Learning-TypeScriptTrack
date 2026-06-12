import { describe, expect, it } from "vitest";
import { twoFer } from "./two-fer.js";

describe("TwoFer", () => {
	it("no name given", () => {
		const expected = "One for you, one for me.";
		expect(twoFer()).toEqual(expected);
	});
	it("a name given", () => {
		const expected = "One for Alice, one for me.";
		expect(twoFer("Alice")).toEqual(expected);
	});
	it("another name given", () => {
		const expected = "One for Bob, one for me.";
		expect(twoFer("Bob")).toEqual(expected);
	});
});
