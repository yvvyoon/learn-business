// ES5
// type이 fruit인 objecrt만 배열에 넣기
const products = [
	{ name: 'banana', type: 'fruit' },
	{ name: 'carrot', type: 'vegetable' },
	{ name: 'apple', type: 'fruit' },
	{ name: 'egg', type: 'egg' },
	{ name: 'yogurt', type: 'dairy' }
];

const fruits = [];

for (let i = 0; i < products.length; i++) {
	if (products[i].type === 'fruit') {
		fruits.push(products[i]);
	}
}

// ES6
// filter의 callback은 true, false 리턴
const 유제품 = products.filter(element => {
	return element.type === 'dairy';
});

// console.log(유제품);

const comments = [
	{ id: 1, author: 'Ozil', contents: 'Mesut' },
	{ id: 2, author: 'Aubameyang', contents: 'Pierre' },
	{ id: 3, author: 'Saka', contents: 'Bukayo' },
	{ id: 4, author: 'Leno', contents: 'Bernd' }
];

const leno = comments.filter(element => {
	return element.author === 'Leno';
});

// Exercise #1
// 10 ~ 100 사이의 숫자만 추출
const numbers = [1, 35, 2, 3, 6, 2, 12, 35, 123, 15029];
const result = numbers.filter(element => {
	// if (element >= 10 && element <= 100) {
	// 	return true;
	// } else {
	//     return false;
	// }

	return element >= 10 && element <= 100 ? true : false;
});

// console.log(result);

// Exercise #2
// filter를 사용하여 reject 함수 만들기
// filter <> reject
function reject(arr, callback) {
	return arr.filter(element, { callback });
}

console.log(reject(numbers, element => (element > 10 ? true : false)));
