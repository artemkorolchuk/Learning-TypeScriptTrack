const WORD_SEPARATORS = /[ -]/;

export function parse(phrase: string): string {
	return phrase
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.split(WORD_SEPARATORS)
		.map((word) => word[0])
		.join("")
		.toUpperCase();
}
