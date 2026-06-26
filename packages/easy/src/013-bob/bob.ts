export function hey(message: string): string {
	message = message.trim();
	const lastChar = message[message.length - 1];
	if (message === "") {
		return "Fine. Be that way!";
	}

	if (
		lastChar === "?" &&
		message === message.toUpperCase() &&
		/[a-z]/i.test(message)
	) {
		return "Calm down, I know what I'm doing!";
	}

	if (message === message.toUpperCase() && /[a-z]/i.test(message)) {
		return "Whoa, chill out!";
	}

	if (lastChar === "?") {
		return "Sure.";
	}

	return "Whatever.";
}
