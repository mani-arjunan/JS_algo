function reverseNumber(num) {
	const clonedNum = num.toString();
	num = num.toString();
	num = num[0] === '-' ? +num.substr(1) : num;
	let reverseNum = 0;

	while (num !== 0) {
		reverseNum = reverseNum * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return clonedNum[0] === '-' ? reverseNum / -1 : reverseNum;
}

console.log(reverseNumber(-449));
