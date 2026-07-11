export class Series {
	constructor(private readonly series: string) {}

	slices(sliceLength: number): number[][] {
		this.isValid(sliceLength);

		const result: number[][] = [];
		for (let i = 0; i < this.series.length; i++) {
			const slice = this.series
				.substring(i, i + sliceLength)
				.split("")
				.map(Number);
			if (slice.length < sliceLength) break;
			result.push(slice);
		}

		return result;
	}

	private isValid(sliceLength: number): void {
		if (this.series === "") throw new Error("series cannot be empty");
		if (sliceLength > this.series.length)
			throw new Error("slice length cannot be greater than series length");
		if (sliceLength === 0) throw new Error("slice length cannot be zero");
		if (sliceLength < 0) throw new Error("slice length cannot be negative");
	}
}
