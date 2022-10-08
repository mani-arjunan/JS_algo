function capitalizeWord(sentence) {
	let finalSentence = '';

	for (let i = 1; i < sentence.length; i++) {
		if (i - 1 === 0) {
			finalSentence += sentence[i - 1].toUpperCase() + sentence[i];
		} else if (sentence[i - 1] === ' ') {
			finalSentence += sentence[i].toUpperCase();
		} else {
			finalSentence += sentence[i];
		}
	}

	return finalSentence;
}

console.log(capitalizeWord('my name is manikandan and am good boy'));
