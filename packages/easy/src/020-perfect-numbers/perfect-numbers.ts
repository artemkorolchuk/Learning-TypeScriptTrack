export function classify(n: number): "perfect" | "abundant" | "deficient" {
	if (n < 1)
		throw new Error("Classification is only possible for natural numbers.");

	const sum = aliquotSum(n);

	if (n === sum) {
		return "perfect";
	}

	if (n < sum) {
		return "abundant";
	}

	return "deficient";
}

export function aliquotSum(n: number): number {
	let divisor = 1;
	let sum = 0;
	while (divisor <= n / 2) {
		if (n % divisor === 0) {
			sum += divisor;
		}
		divisor += 1;
	}

	return sum;
}
