const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(inputText: string): boolean {
	const lowerText = inputText.toLowerCase();
	const text = new Set<string>(lowerText);

	for (const letter of alphabet) {
		if (!text.has(letter)) {
			return false;
		}
	}

	return true;
}
