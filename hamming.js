var compute;

compute = function(s1, s2) {


		if (s1.length !== s2.length) {

			throw new Error('DNA strands must be of equal length.');
		}

		var dist = 0;

		for (var i = 0; i < s1.length; i += 1) {
				if (s1.charAt(i) !== s2.charAt(i)) {
					dist += 1;
				}
		}
	return dist;
};

module.exports = {
		compute: compute
};
