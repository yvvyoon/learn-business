// ES5
const users = [
	{ name: 'yoon' },
	{ name: 'kim' },
	{ name: 'choi' },
	{ name: 'shin' }
];
let user = null;

for (let i = 0; i < users.length; i++) {
	if (users[i].name === 'yoon') {
		user = users[i];

		break;
	}
}

// ES6
user = users.find(user => {
	return user.name === 'yoon';
});

// 현업에서는?
const data = [
	{ id: 1, name: 'yoon' },
	{ id: 1, name: 'choi' },
	{ id: 1, name: 'hong' },
	{ id: 1, name: 'moon' }
];
const whatWeWant = data.find(result => result.id === 3);

// Exercise #1
// 이름이 egg인 제품을 가져오기
const products = [
	{ name: 'banana', type: 'fruit' },
	{ name: 'carrot', type: 'vegetable' },
	{ name: 'apple', type: 'fruit' },
	{ name: 'egg', type: 'egg' },
	{ name: 'yogurt', type: 'dairy' }
];
const egg = products.find(result => result.name === 'egg');

console.log(egg);