// ES5
const addNumbers = (a, b, c, d, e) => {
	const numbers = [a, b, c, d, e];

	return numbers.reduce((acc, num) => {
		acc += num;
	}, 0);
};

const addAll = (...numbers) => {
	console.log(numbers);

	return numbers.reduce((acc, num) => {
        acc += num;
        
        return acc;
	}, 0);
};

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const defaultColors = ['red','blue','yellow'];
const addedColors = ['orange', 'green'];
const sum = defaultColors.concat(addedColors);
const es6Sum = [...defaultColors, ...addedColors];
const justSum = [defaultColors, addedColors];
console.log(sum);
console.log(es6Sum);
console.log(justSum);

// 현업에서는?
// function logging() {
//     console.log(arguments);
//     console.log(...arguments);
// }

// logging(1, 2, 3, 4);