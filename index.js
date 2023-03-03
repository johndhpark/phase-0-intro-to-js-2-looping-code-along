// Code your solutions in this file
function writeCards(names, event) {
	const messages = [];

	for (const name of names) {
		messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
	}

	return messages;
}

function countDown(start) {
	for (let num = start; num >= 0; --num) {
		console.log(num);
	}
}
