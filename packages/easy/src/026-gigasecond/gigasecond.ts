const GIGA_SECOND = 1_000_000_000;
const MILLISECONDS = 1000;

export class Gigasecond {
	constructor(private readonly d: Date) {}

	date(): Date {
		return new Date(this.d.getTime() + GIGA_SECOND * MILLISECONDS);
	}
}
