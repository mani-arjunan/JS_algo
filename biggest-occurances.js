function findOccurances(arr) {
	let occuranceMap = {};
	let maximumOccurance = {
		key: '',
		occurances: 0,
	};

	for (let val of arr) {
		if (occuranceMap[val]) {
			occuranceMap[val]++;
		} else {
			occuranceMap[val] = 1;
		}
	}

	for (let resultOccurances in occuranceMap) {
		if (maximumOccurance.occurances < occuranceMap[resultOccurances]) {
			maximumOccurance.occurances = occuranceMap[resultOccurances];
			maximumOccurance.key = resultOccurances;
		}
	}

	return maximumOccurance;
}

console.log(findOccurances(['a', 'c', 'b', 'c', 'a', 'b', 'c', 'c']));
