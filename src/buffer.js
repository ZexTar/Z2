const buffer = {
	data: [],
	add(unit) {
		this.data.unshift(unit);
	},

	remove() {
		return this.data.pop();
	},

	hasNext() {
		return this.data.length > 0;
	},
};

module.exports = buffer;
