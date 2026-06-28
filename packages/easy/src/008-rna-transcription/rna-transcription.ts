const DNA_TO_RNA = { G: "C", C: "G", T: "A", A: "U" } as const;

type DnaBase = keyof typeof DNA_TO_RNA;

export function toRna(strand: string): string {
	return Array.from(strand, (base) => {
		const rna = DNA_TO_RNA[base as DnaBase];
		if (rna === undefined) throw new Error("Invalid input DNA.");
		return rna;
	}).join("");
}
