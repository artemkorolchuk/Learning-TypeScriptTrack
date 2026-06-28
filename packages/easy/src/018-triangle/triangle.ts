export class Triangle {
	private a: number;
	private b: number;
	private c: number;

	constructor(...sides: number[]) {
		[this.a, this.b, this.c] = sides;
	}

	get isEquilateral(): boolean {
		return this.isValid() && this.a === this.b && this.a === this.c;
	}

	get isIsosceles(): boolean {
		return (
			this.isValid() &&
			(this.a === this.b || this.a === this.c || this.b === this.c)
		);
	}

	get isScalene() {
		return (
			this.isValid() &&
			this.a !== this.b &&
			this.a !== this.c &&
			this.b !== this.c
		);
	}

	private isValid(): boolean {
		if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
			return false;
		}

		if (
			this.a + this.b < this.c ||
			this.a + this.c < this.b ||
			this.b + this.c < this.a
		) {
			return false;
		}

		return true;
	}
}
