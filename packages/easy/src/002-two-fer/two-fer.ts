import { describe, expect, it, test } from "vitest";

export function twoFer(name: string = "you"): string {
	return `One for ${name}, one for me.`;
}
