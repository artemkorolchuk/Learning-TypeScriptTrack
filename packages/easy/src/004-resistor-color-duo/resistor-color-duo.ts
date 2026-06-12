export const COLORS: string[] = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
] as const;

export type Color = (typeof COLORS)[number];

export function decodedValue(colors: string[]): number {
	const [first, second] = colors;
	if (first === undefined || second === undefined) {
		throw new Error("At least two color bands are required");
	}

	const firstColorBand = COLORS.indexOf(first);
	const secondColorBand = COLORS.indexOf(second);

	if (firstColorBand === -1 || secondColorBand === -1) {
		throw new Error("Invalid color");
	}

	return firstColorBand * 10 + secondColorBand;
}
