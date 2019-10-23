// ES5
const numbers = [10, 20, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

// ES6
sum = numbers.reduce((acc, number) => {
	// acc : 초기값 (여기서는 0이라는 두번째 인자)
	// acc에는 값이 누적됨
	// number : 배열의 첫번째 값부터 사용함
	return acc + number;
	// 0 + 10
	// 10 + 20
	// 30 + 30
}, 0);
// 0 10 30 60

let multiply = numbers.reduce((acc, number) => {
	return acc * number;
}, 1);

const strings = ['Apple', ' is', ' iPhone'];
const summed = strings.reduce((acc, str) => {
	return acc + str;
}, '');

// console.log(summed);

// map 함수 구현하기
// let dNumbers = numbers.map(e => e * 2);
let dNumbers = numbers.reduce((acc, number) => {
	acc.push(number * 2);

	return acc;
}, []);

// 현업에서는?

// !0 = true
// '', undefined, null, 0의 거짓은 true

// Exercise #1
// reduce를 사용하여 서 있는 사람 혹은 앉아 있는 사람 인원 수 출력
const attendees = [
	{ id: 1, type: 'sitting' },
	{ id: 2, type: 'standing' },
	{ id: 3, type: 'sitting' },
	{ id: 4, type: 'standing' },
	{ id: 5, type: 'standing' }
];

const result = attendees.reduce((acc, str) => {
	if (str.type === 'sitting') {
		acc++;
	} else {
		return acc;
	}

	return acc;
}, 0);

// console.log(result);

// Exercise #2
// unique 만들기
const samples = [10, 20, 30, 20, 40, 10, 50];
// -> [ 10, 20, 30, 40, 50 ];

function unique(arr) {
	return arr.reduce((acc, newArr) => {
		if (!acc.find(el => el === newArr)) {
			acc.push(newArr);
		}

		return acc;
	}, []);
}

const result1 = unique(samples);

console.log(result1);
