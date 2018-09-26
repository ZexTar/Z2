const preAttackBuffer = require('./buffer');

const startSimulation = (...args) => {
	if (args.length > 5) {
		console.log('maximum number of args is 5');
		return false;
	}

	let units = args;
	const defetedUnits = [];

	const moveToDefeated = () => units.forEach((unit) => {
		if (!unit.isActive) {
			defetedUnits.push(unit);
			console.log(`${unit.name} has been defeted !`);
		}
	});

	const aBit = () => new Promise(res => setTimeout(res, 100));

	const atLeastTwoUnits = () => units.length >= 2;

	const removeFromBuffer = (attackingUnit) => {
		if (defetedUnits.length > 0) {
			for (let i = 0; i < defetedUnits.length; i += 1) {
				if (defetedUnits[i].name === attackingUnit.name) {
					return true;
				}
			}
			return false;
		}
		return false;
	};

	const discardDefeatedUnits = () => {
		units = units.filter(unit => unit.isActive === true);
	};

	units.forEach(unit => setTimeout(() => preAttackBuffer.add(unit), unit.rechargeTime));

	(async function battleLoop() {
		while (atLeastTwoUnits()) {
			if (preAttackBuffer.hasNext()) {
				const attackingUnit = preAttackBuffer.remove();
				if (!removeFromBuffer(attackingUnit)) {
					setTimeout(() => preAttackBuffer.add(attackingUnit), attackingUnit.rechargeTime);
					const enemyUnits = [];
					for (let i = 0; i < units.length; i += 1) {
						if (units[i].name !== attackingUnit.name) {
							enemyUnits.push(units[i]);
						}
					}
					const targetUnit = enemyUnits[Math.floor(Math.random() * enemyUnits.length)];
					targetUnit.receiveDamage(attackingUnit.dealDamage());
					console.log([
						`${attackingUnit.name} has inflicted ${attackingUnit.dealDamage().toFixed(2)} damage to ${targetUnit.name}`,
					].join(' '));

					moveToDefeated();
					discardDefeatedUnits();
				}
			}
			await aBit();
		}
		console.log([
			'THE BATTLE IS OVER!',
			`${units[0].name} HAS WON THE BATTLE!`,
		].join(' '));
	}());

	return true;
};

module.exports = startSimulation;
