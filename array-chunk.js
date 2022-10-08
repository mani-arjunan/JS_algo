function chunkArray(arr, size) {
	let count = 1;
	const resultArr = [];
	let tempArr = [];

	for (let i = 0; i < arr.length; i++) {
		tempArr.push(arr[i]);

		if (count === size) {
			count = 1;
			resultArr.push([...tempArr]);
			tempArr = [];
		} else {
			count++;
		}
	}

	return tempArr.length === 0 ? resultArr : resultArr.concat([tempArr]);
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
