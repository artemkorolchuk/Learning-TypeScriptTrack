export class DiffieHellman {
	constructor(
		private readonly p: number,
		private readonly g: number,
	) {
		if (!this.isPrime(p) || !this.isPrime(g))
			throw new Error("the constructor arguments are not prime");
	}

	getPublicKey(privateKey: number): number {
		if (privateKey <= 1 || privateKey >= this.p)
			throw new Error("invalid private key");
		return this.g ** privateKey % this.p;
	}

	getSecret(theirPublicKey: number, myPrivateKey: number): number {
		return theirPublicKey ** myPrivateKey % this.p;
	}

	private isPrime(num: number): boolean {
		if (num <= 1) return false;
		if (num <= 3) return true;
		if (num % 2 === 0 || num % 3 === 0) return false;

		for (let i = 5; i * i <= num; i += 6) {
			if (num % i === 0 || num % (i + 2) === 0) return false;
		}

		return true;
	}
}
