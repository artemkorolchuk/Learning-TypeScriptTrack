export function transform(
	oldFormat: Record<string, string[]>,
): Record<string, number> {
	const newFormat: Record<string, number> = {};

	for (const [key, values] of Object.entries(oldFormat)) {
		for (const letter of values) {
			newFormat[letter.toLowerCase()] = Number(key);
		}
	}

	return newFormat;
}
