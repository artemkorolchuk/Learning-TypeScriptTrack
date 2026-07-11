const GIGA_MILLISECOND = 1_000_000_000_000;

export class Gigasecond {
	constructor(private readonly startDate: Date) {}

	date(): Date {
		return new Date(this.startDate.getTime() + GIGA_MILLISECOND);
	}
}
