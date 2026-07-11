export function isArmstrongNumber(n: number | bigint): boolean {
	const strNumber = n.toString();
	const power = BigInt(strNumber.length);
	let sum: bigint = 0n;

	for (const digit of strNumber) {
		sum += BigInt(digit) ** power;
	}

	return BigInt(n) === sum;
}
