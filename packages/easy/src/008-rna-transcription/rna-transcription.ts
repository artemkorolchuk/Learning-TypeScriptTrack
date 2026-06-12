export const TRANSCIBED_RULE: Map<string, string> = new Map([
	["G", "C"],
	["C", "G"],
	["T", "A"],
	["A", "U"],
]);

export function toRna(inputDnaStrand: string): string {
	let result = "";

	for (const char of inputDnaStrand) {
		const mapped = TRANSCIBED_RULE.get(char);

		if (mapped === undefined) {
			throw new Error("Invalid input DNA.");
		}

		result += mapped;
	}

	return result;
}
