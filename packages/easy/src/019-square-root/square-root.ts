export function squareRoot(radicand: number): number {
	let low = 0;
	let high = radicand;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const square = mid * mid;

		if (square === radicand) {
			return mid;
		}

		if (square <= radicand) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return low;
}

export function squareRootBinary(radicand: number): { result: number; iterations: number; } {
	let low = 0;
	let high = radicand;
  let iterations = 0;
  let result = 0;

  while (low <= high) {
    iterations += 1;
		const mid = Math.floor((low + high) / 2);
		const square = mid * mid;

    if (square === radicand) {
      result = mid;
			return {result, iterations};
		}

		if (square <= radicand) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
  result = low;
	return {result, iterations};
}


export function squareRootNewton(n: number): { result: number; iterations: number; } {
  let iterations = 0;
  let result = n;
  if (n < 2) return {result, iterations};                                // 0→0, 1→1
  let guess = n;
  let next = Math.floor((guess + n / guess) / 2);     // average guess & n/guess
  while (next < guess) {                              // stop when it stops decreasing
    guess = next;
    next = Math.floor((guess + n / guess) / 2);
    iterations += 1
  }

  result = guess;
  return {result, iterations};
}
