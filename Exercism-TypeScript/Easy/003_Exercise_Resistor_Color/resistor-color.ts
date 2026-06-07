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

export const colorCode = (color: string): number => {
  const result: number = COLORS.indexOf(color);

  if (result === -1) {
    throw new Error("Unknown color");
  }

  return result;
};
