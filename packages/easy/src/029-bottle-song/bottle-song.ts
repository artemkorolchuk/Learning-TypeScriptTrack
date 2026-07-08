const LYRICS_COUNT: Record<number, string> = {
	0: "no",
	1: "One",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
	10: "Ten",
};

function bottleWord(count: number): string {
	return count === 1 ? "bottle" : "bottles";
}

export function recite(
	initialBottleCount: number,
	takeDownCount: number,
): string[] {
	const result: string[] = [];
	for (let i = 0; i < takeDownCount; i++) {
		const verse: string[] = [];
		const currentVerse: number = initialBottleCount - i;
		const nextVerse: number = currentVerse - 1;

		const wallLine = `${LYRICS_COUNT[currentVerse]} green ${bottleWord(currentVerse)} hanging on the wall,`;
		verse.push(wallLine, wallLine);
		verse.push("And if one green bottle should accidentally fall,");
		verse.push(
			`There'll be ${LYRICS_COUNT[nextVerse]?.toLowerCase() ?? "no"} green ${bottleWord(nextVerse)} hanging on the wall.`,
		);
		if (i + 1 < takeDownCount) verse.push(``);

		result.push(...verse);
	}
	return result;
}
