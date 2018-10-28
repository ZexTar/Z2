# Z2

This code can simulate battle between two or more units.

In the index.js file you can spawn and delete units. There is already a basic setup there:

```javascript
const unit1 = new Unit('unit1');
const unit2 = new Unit('unit2');
const unit3 = new Unit('unit3');
```
U can spawn your own units just by creating new Unit instance and passing unit name as argument:

```javascript
const newUnit = new Unit('unitname');
```
Finally, just pass them to a startSimulation function:

```javascript
startSimulation(unit1, unit2, unit3, newUnit, moreUnits);
```
Run ```npm install``` and ```npm start``` to watch battle events!

