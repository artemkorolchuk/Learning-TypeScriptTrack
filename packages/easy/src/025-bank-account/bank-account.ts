export class ValueError extends Error {
	constructor() {
		super("Bank account error");
	}
}

export class BankAccount {
	private _balance: number = 0;
	private isActive: boolean;
	constructor() {
		this.isActive = false;
	}

	open(): void {
		if (this.isActive) throw new ValueError();
		this._balance = 0;
		this.isActive = true;
	}

	close(): void {
		this.checkActive();
		this.isActive = false;
	}

	deposit(amount: number): void {
		this.checkActive();
		if (amount < 0) throw new ValueError();
		this._balance += amount;
	}

	withdraw(amount: number): void {
		this.checkActive();
		if (amount < 0) throw new ValueError();
		if (this._balance < amount) throw new ValueError();
		this._balance -= amount;
	}

	get balance(): number {
		this.checkActive();
		return this._balance;
	}

	private checkActive(): void {
		if (!this.isActive) throw new ValueError();
	}
}
