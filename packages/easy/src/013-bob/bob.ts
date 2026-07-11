export function hey(message: string): string {
	const text = message.trim();
	if (text === "") return "Fine. Be that way!";
	const isShouting = text === text.toUpperCase() && /[a-z]/i.test(text);
	const isQuestion = text.endsWith("?");

	if (isQuestion && isShouting) return "Calm down, I know what I'm doing!";
	if (isShouting) return "Whoa, chill out!";
	if (isQuestion) return "Sure.";

	return "Whatever.";
}
