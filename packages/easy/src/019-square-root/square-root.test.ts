import { describe, expect, it } from "vitest";
import {
	squareRoot,
	squareRootBinary,
	squareRootNewton,
} from "./square-root.js";

describe("Square Root", () => {
	// Root of 0
	it("root of 0", () => {
		expect(squareRoot(0)).toEqual(0);
	});
	// Root of 1
	it("root of 1", () => {
		expect(squareRoot(1)).toEqual(1);
	});
	// Root of 4
	it("root of 4", () => {
		expect(squareRoot(4)).toEqual(2);
	});
	// Root of 25
	it("root of 25", () => {
		expect(squareRoot(25)).toEqual(5);
	});
	// Root of 81
	it("root of 81", () => {
		expect(squareRoot(81)).toEqual(9);
	});
	// Root of 196
	it("root of 196", () => {
		expect(squareRoot(196)).toEqual(14);
	});
	// Root of 65025
	it("root of 65025", () => {
		expect(squareRoot(65025)).toEqual(255);
	});
	//Root of 10
	it("root of 10", () => {
		expect(squareRoot(10)).toEqual(4);
	});
});

describe("Square root Binary", () => {
	// Root of 0
	it("root of 0", () => {
		const { result } = squareRootBinary(0);
		expect(result).toEqual(0);
	});
	// Root of 1
	it("root of 1", () => {
		const { result } = squareRootBinary(1);
		expect(result).toEqual(1);
	});
	// Root of 4
	it("root of 4", () => {
		const { result } = squareRootBinary(4);
		expect(result).toEqual(2);
	});
	// Root of 25
	it("root of 25", () => {
		const { result } = squareRootBinary(25);
		expect(result).toEqual(5);
	});
	// Root of 81
	it("root of 81", () => {
		const { result } = squareRootBinary(81);
		expect(result).toEqual(9);
	});
	// Root of 196
	it("root of 196", () => {
		const { result } = squareRootBinary(196);
		expect(result).toEqual(14);
	});
	// Root of 65025
	it("root of 65025", () => {
		const { result } = squareRootBinary(65025);
		expect(result).toEqual(255);
	});
	//Root of 10
	it("root of 10", () => {
		const { result } = squareRootBinary(10);
		expect(result).toEqual(4);
	});
});

describe("Square root Newton", () => {
	// Root of 0
	it("root of 0", () => {
		const { result } = squareRootNewton(0);
		expect(result).toEqual(0);
	});
	// Root of 1
	it("root of 1", () => {
		const { result } = squareRootNewton(1);
		expect(result).toEqual(1);
	});
	// Root of 4
	it("root of 4", () => {
		const { result } = squareRootNewton(4);
		expect(result).toEqual(2);
	});
	// Root of 25
	it("root of 25", () => {
		const { result } = squareRootNewton(25);
		expect(result).toEqual(5);
	});
	// Root of 81
	it("root of 81", () => {
		const { result } = squareRootNewton(81);
		expect(result).toEqual(9);
	});
	// Root of 196
	it("root of 196", () => {
		const { result } = squareRootNewton(196);
		expect(result).toEqual(14);
	});
	// Root of 65025
	it("root of 65025", () => {
		const { result } = squareRootNewton(65025);
		expect(result).toEqual(255);
	});
	//Root of 10
	it("root of 10", () => {
		const { result } = squareRootNewton(10);
		expect(result).toEqual(3);
	});
});
