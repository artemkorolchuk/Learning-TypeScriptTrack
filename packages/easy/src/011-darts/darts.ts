const ZONES = [
	{ radius: 1, score: 10 },
	{ radius: 5, score: 5 },
	{ radius: 10, score: 1 },
	{ radius: Infinity, score: 0 },
];

export function score(x: number, y: number): number {
	const distance = Math.sqrt(x * x + y * y);

	for (const zone of ZONES) {
		if (distance <= zone.radius) {
			return zone.score;
		}
	}

	throw new Error("Unreachable");
}
