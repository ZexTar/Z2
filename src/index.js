const Unit = require('./unit');
const startSimulation = require('./simulator');

// create units

const unit1 = new Unit('unit1');
const unit2 = new Unit('unit2');
const unit3 = new Unit('unit3');
const unit4 = new Unit('unit4');
const unit5 = new Unit('unit5');

// simulate battle

startSimulation(unit1, unit2, unit3, unit4, unit5);
