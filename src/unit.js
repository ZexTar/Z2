class Unit {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.rechargeTime = 1000 * this.health / 100;
		this.damage = this.health / 100;
		this.criticalChance = 10 - this.health / 10;
		this.isActive = true;
	}

	dealDamage() {
		if (this.criticalChance >= 100 * Math.random()) {
			return this.damage * 2;
		}
		return this.damage;
	}

	receiveDamage(damageTaken) {
		this.health -= damageTaken;
		this.rechargeTime = 1000 * this.health / 100;
		this.damage = this.health / 100;
		this.criticalChance = 10 - this.health / 10;
		if (this.health <= 0) this.isActive = false;
	}
}

module.exports = Unit;
