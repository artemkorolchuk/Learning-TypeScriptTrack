const TRANSLATED: Record<string, string> = {
	AUG: "Methionine",
	UUU: "Phenylalanine",
	UUC: "Phenylalanine",
	UUA: "Leucine",
	UUG: "Leucine",
	UCU: "Serine",
	UCC: "Serine",
	UCA: "Serine",
	UCG: "Serine",
	UAU: "Tyrosine",
	UAC: "Tyrosine",
	UGU: "Cysteine",
	UGC: "Cysteine",
	UGG: "Tryptophan",
};

const STOP_CODONS = ["UAA", "UAG", "UGA"];
const STEP_CODON = 3;

export function translate(rnaString: string): string[] {
	const result = [];

	for (let i = 0; i < rnaString.length; i += STEP_CODON) {
		const currentCodon = rnaString.substring(i, i + STEP_CODON);
		if (STOP_CODONS.includes(currentCodon)) {
			break;
		}

		if (TRANSLATED[currentCodon] !== undefined) {
			result.push(TRANSLATED[currentCodon]);
		} else {
			throw new Error("Invalid codon");
		}
	}

	return result;
}
