const MAX_SIDED_DISE = 6;
const COUNT_DISES = 4;

export class DnDCharacter {
	readonly strength: number;
	readonly dexterity: number;
	readonly constitution: number;
	readonly intelligence: number;
	readonly wisdom: number;
	readonly charisma: number;
	readonly hitpoints: number;

	constructor() {
		this.strength = DnDCharacter.generateAbilityScore();
		this.dexterity = DnDCharacter.generateAbilityScore();
		this.constitution = DnDCharacter.generateAbilityScore();
		this.intelligence = DnDCharacter.generateAbilityScore();
		this.wisdom = DnDCharacter.generateAbilityScore();
		this.charisma = DnDCharacter.generateAbilityScore();
		this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
	}

	public static generateAbilityScore(): number {
		const resultRolling = [];
		for (let i = 0; i < COUNT_DISES; i++) {
			resultRolling.push(getRandomInt(MAX_SIDED_DISE));
		}

		const min: number = Math.min(...resultRolling);

		const minIndex = resultRolling.indexOf(min);
		if (minIndex > -1) {
			resultRolling.splice(minIndex, 1);
		}

		let result = 0;

		for (const value of resultRolling) {
			result += value;
		}

		return result;
	}

	public static getModifierFor(abilityValue: number): number {
		return Math.floor((abilityValue - 10) / 2);
	}
}

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max) + 1;
}
