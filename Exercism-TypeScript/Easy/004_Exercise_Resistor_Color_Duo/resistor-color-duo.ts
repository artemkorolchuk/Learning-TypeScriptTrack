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
];

export function decodedValue(colors: string[]): number {
  if (colors.length < 2) {
    throw new Error("At least two colors band are required");
  }

  const firstColorBand = COLORS.indexOf(colors[0]!);
  const secondColorBand = COLORS.indexOf(colors[1]!);

  if (firstColorBand === -1 || secondColorBand === -1) {
    throw new Error("Invalid color");
  }

  return firstColorBand * 10 + secondColorBand;
}
