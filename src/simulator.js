const startSimulation = (...args) => {
	if (args.length < 2) {
		return 'create at least 2 units';
	}
	const units = args;

	units.forEach((unit) => {
		unit.attack(units.filter(enemies => unit.name !== enemies.name));
	});

	return true;
};

module.exports = startSimulation;
