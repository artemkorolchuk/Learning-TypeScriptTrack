export function convert(givenNumber: number): string {
	const RULES = [
		[3, "Pling"],
		[5, "Plang"],
		[7, "Plong"],
	] as const;

	const drops = RULES.filter(([factor]) => givenNumber % factor === 0)
		.map(([, sound]) => sound)
		.join("");

	return drops || String(givenNumber);
}
