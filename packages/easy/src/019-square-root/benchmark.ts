import { squareRootBinary, squareRootNewton } from "./square-root.js";

const radicands = [10, 100, 1_000, 10_000, 100_000, 1_000_000];
const AVERAGE_PARAM = 100_000;

for (const n of radicands) {
	const t0 = performance.now();
	let iterationsBinary = 0;
	for (let i = 0; i <= AVERAGE_PARAM; i++) {
		const { iterations } = squareRootBinary(n);
		iterationsBinary = iterations;
	}
	const t1 = performance.now();
	const binaryTime = ((t1 - t0) / AVERAGE_PARAM).toFixed(6);

	const t2 = performance.now();
	let iterationsNewton = 0;
	for (let i = 0; i <= AVERAGE_PARAM; i++) {
		const { iterations } = squareRootNewton(n);
		iterationsNewton = iterations;
	}
	const t3 = performance.now();
	const newtonTime = ((t3 - t2) / AVERAGE_PARAM).toFixed(6);

	console.log(
		`n=${n} | binary: ${iterationsBinary} iters | newton: ${iterationsNewton} iters | binary ${binaryTime} ms | newton ${newtonTime} ms`,
	);
}
