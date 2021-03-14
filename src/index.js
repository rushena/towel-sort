
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix) return [];
	return matrix.reduce((acc, item, index) => {
		if (index % 2 === 1) {
			return [...acc, ...item.reverse()]
		} else {
			return [...acc, ...item]
		}
	}, []);
}
