class Unit {
	constructor(name) {
		this.name = name;
		this.health = 100;
		this.rechargeTime = 1000 * this.health / 100;
		this.isActive = true;
	}

	calculateDmg() {
		this.damage = this.health / 100;
		this.criticalChance = 10 - this.health / 10;
	}

	dealDamage() {
		this.calculateDmg();
		if (this.criticalChance >= 100 * Math.random()) {
			return this.damage * 2;
		}
		return this.damage;
	}

	receiveDamage(damageTaken) {
		this.health -= damageTaken;
		this.rechargeTime = 1000 * this.health / 100;
		if (this.health <= 0) this.isActive = false;
	}

	attack(enemies) {
		setTimeout(() => {
			if (this.isActive) {
				if (enemies.length) {
					const target = enemies[Math.floor(Math.random() * enemies.length)];
					target.receiveDamage(this.dealDamage());
					console.log([
						`${this.name} has inflicted ${this.dealDamage().toFixed(3)} damage to ${target.name}`,
					].join(' '));
					if (!target.isActive) {
						console.log(`${target.name} has been defeated!`);
					}
					const activeEnemies = enemies.filter(enemy => enemy.isActive === true);
					this.attack(activeEnemies);
				} else {
					console.log([
						'THE BATTLE IS OVER!',
						`${this.name} HAS WON THE BATTLE!!!`,
					].join(' '));
				}
			}
		}, this.rechargeTime);
	}
}

module.exports = Unit;
