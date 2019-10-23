const computers = [
	{ name: 'mac-air', ram: 8 },
	{ name: 'gram', ram: 4 },
	{ name: 'mac-pro', ram: 16 }
];

let everyComputerAvailable = true;
let someComputerAvailable = false;

// ES5
for (let i = 0; i < computers.length; i++) {
	const computer = computers[i];

	if (computer.ram < 8) {
		everyComputerAvailable = false;
	}
	if (computer.ram > 8) {
		someComputerAvailable = true;
	}
}

// ES6
everyComputerAvailable = computers.every(computer => computer.ram > 8);
someComputerAvailable = computers.some(computer => computer.ram > 8);

// 현업에서는/
const data = [
	{ name: 'yoon', answer: 'pork' },
	{ name: 'choi', answer: '' },
	{ name: 'ryu', answer: 'chicken' }
];

const everyUserAnswered = data.every(e => e.answer.length > 0);
// console.log(everyUserAnswered);

// Exercise #1
// 모든 사람이 제출했나요?
// 한명이라도 제출했나요?
const users = [
	{ id: 1, submit: true },
	{ id: 2, submit: true },
	{ id: 3, submit: false },
	{ id: 4, submit: true }
];

const everyUserSubmit = users.every(el => el.submit === true);
const someUserSubmit = users.some(el => el.submit === true);
// console.log(everyUserSubmit, someUserSubmit);

// Exercise #2
// every를 이용하여 some 함수 만들기
function some(arr, callback) {
	return !arr.every(el => !callback(el));
}

console.log(some(users, el => el.submit));
