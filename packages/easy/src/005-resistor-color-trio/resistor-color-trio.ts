const COLOR_VALUES: Record<string, number> = {
	black: 0,
	brown: 1,
	red: 2,
	orange: 3,
	yellow: 4,
	green: 5,
	blue: 6,
	violet: 7,
	grey: 8,
	white: 9,
};

const KILOOHMS_BASE = 1000;
const MEGOHMS_BASE = 1_000_000;
const GIGAOHMS_BASE = 1_000_000_000;

export function decodedResistorValue(inputColors: string[]): string {
	if (inputColors.length < 3) {
		throw new Error("At least three color bands are required");
	}

	const [firstColor, secondColor, thirdColor] = inputColors;

	const firstColorBand = COLOR_VALUES[firstColor ?? ""];
	const secondColorBand = COLOR_VALUES[secondColor ?? ""];
	const thirdColorBand = COLOR_VALUES[thirdColor ?? ""];

	if (
		firstColorBand === undefined ||
		secondColorBand === undefined ||
		thirdColorBand === undefined
	) {
		throw new Error("Invalid color");
	}

	const valueInOhms: number =
		(firstColorBand * 10 + secondColorBand) * 10 ** thirdColorBand;

	if (valueInOhms < KILOOHMS_BASE) {
		return `${valueInOhms} ohms`;
	}

	if (valueInOhms < MEGOHMS_BASE) {
		return `${valueInOhms / KILOOHMS_BASE} kiloohms`;
	}

	if (valueInOhms < GIGAOHMS_BASE) {
		return `${valueInOhms / MEGOHMS_BASE} megaohms`;
	}

	return `${valueInOhms / GIGAOHMS_BASE} gigaohms`;
}
