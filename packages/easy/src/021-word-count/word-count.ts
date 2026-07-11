const SEPARATED_RULE = /[^a-z0-9']+/;

export function count(text: string) {
	const lowerText = text.toLowerCase();

	const result = new Map<string, number>();
	const words: string[] = lowerText
		.split(SEPARATED_RULE)
		.filter((word) => word.length > 0);

	for (let word of words) {
		word = word.replace(/^'|'$/g, "");
		if (word.length === 0) continue;
		const value = result.get(word) ?? 0;
		result.set(word, value + 1);
	}

	return result;
}
