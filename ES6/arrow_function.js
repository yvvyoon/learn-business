// ES5
function add() {
	return a + b;
}

// ES6
const multiply = (a, b) => {
	return a * b;
};

const mul = (a, b) => a * b;

const square = a => a * a;

const logging = () => console.log('logging');

const obj = {
	name: 'Maro',
	sayHello: function() {
		console.log('Hello');
	},
	sayBye() {
		console.log('Bye');
	}
};

obj;
