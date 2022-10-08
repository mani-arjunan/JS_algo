function findStringOccurances(word) {
	let occuranceMap = {};
	let maximumOccurance = {
		key: '',
		occurances: 0,
	};

	for (let val of word) {
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

console.log(findStringOccurances('hey there my friend'));
