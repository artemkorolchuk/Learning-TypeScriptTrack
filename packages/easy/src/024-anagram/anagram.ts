export class Anagram {
	constructor(private readonly input: string) {}

	matches(...potentials: string[]): string[] {
		const result: string[] = [];
		const inputLower = this.input.toLowerCase();
		const sortedInput = inputLower.split("").sort().join("");

		for (const word of potentials) {
			const wordLower = word.toLowerCase();
			if (inputLower === wordLower) continue;

			const sortedWord = wordLower.split("").sort().join("");
			if (sortedWord === sortedInput) result.push(word);
		}

		return result;
	}
}
