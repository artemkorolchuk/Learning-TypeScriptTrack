export function format(name: string, input_number: number): string {
  const lastTwo: number = input_number % 100;

  const isSpecial: boolean = lastTwo >= 11 && lastTwo <= 13;

  let ending: string = "th";

  if (!isSpecial) {
    const lastDigit = input_number % 10;

    if (lastDigit === 1) ending = "st";
    else if (lastDigit === 2) ending = "nd";
    else if (lastDigit === 3) ending = "rd";
  }

  return `${name}, you are the ${input_number + ending} customer we serve today. Thank you!`;
}
