// ES5
const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
	// console.log(colors[i]);
}

// ES6
// colors.forEach(element => console.log(element));

// Exercise #1
function forEach(arr, callback) {
	// 해당 Object가 배열인지 판별하는 함수
	if (!Array.isArray(arr)) throw new Error('배열이 아니에염');

	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

// forEach(colors, e => console.log(e));

// Exercise #2
const images = [{ h: 10, w: 20 }, { h: 5, w: 5 }, { h: 20, w: 30 }];
const area = [];

images.forEach(element => {
	area.push(element.h * element.w);
});

console.log(area);
