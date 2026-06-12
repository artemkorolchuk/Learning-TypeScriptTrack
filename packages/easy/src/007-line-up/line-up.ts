export function format(name: string, inputNumber: number): string {
	const lastTwo = inputNumber % 100;

	const isSpecial = lastTwo >= 11 && lastTwo <= 13;

	let ending = "th";

	if (!isSpecial) {
		const lastDigit = inputNumber % 10;

		if (lastDigit === 1) ending = "st";
		else if (lastDigit === 2) ending = "nd";
		else if (lastDigit === 3) ending = "rd";
	}

	return `${name}, you are the ${inputNumber}${ending} customer we serve today. Thank you!`;
}
