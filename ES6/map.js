// ES5
const numbers = [1, 2, 3];
const dNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	dNumbers.push(numbers[i] * 2);
}

// ES6
// map : callback의 결과값을 배열로 저장함
const tNumbers = numbers.map(numbers => numbers * 3);
console.log(tNumbers);

const data = [3, 5, 7, 9];

// data.map(e => {
// 	return <h1>{e}</h1>;
// });

// Exercise #1
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const heights = images.map(element => element.h);
// console.log(heights);

// Exercise #2
const result = pluck(images, 'h');

function pluck(arr, key) {
    return arr.map(element => element[key]);
}

console.log(result);