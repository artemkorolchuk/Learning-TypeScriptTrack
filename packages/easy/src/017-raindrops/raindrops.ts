export function convert(givenNumber: number): string {
	const result: string[] = [];

	if (givenNumber % 3 === 0) {
		result.push("Pling");
	}

	if (givenNumber % 5 === 0) {
		result.push("Plang");
	}

	if (givenNumber % 7 === 0) {
		result.push("Plong");
	}

	if (result.length === 0) {
		result.push(givenNumber.toString());
	}

	return result.join("");
}
