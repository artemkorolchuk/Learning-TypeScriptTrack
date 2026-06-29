export const ORBITAL_PERIODS = {
	mercury: 0.2408467,
	venus: 0.61519726,
	earth: 1,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132,
} as const;

export type Planet = keyof typeof ORBITAL_PERIODS;
const SECONDS_IN_EARTH_YEAR = 31_557_600;

export function age(planet: Planet, seconds: number): number {
	const earthYears = seconds / SECONDS_IN_EARTH_YEAR;
	const planetYears = earthYears / ORBITAL_PERIODS[planet];
	return Number(planetYears.toFixed(2));
}
