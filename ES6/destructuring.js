// ES5
const computer = {
	model: 'macbook-pro',
	year: 2017,
	price: 1250000,
};

// const model = computer.model;
// const year = computer.year;

// ES6
const labtop = {
	model: 'gram',
	year: 2018,
	price: 1000000,
};

const { model, year, price } = labtop;

// 현업에서는?
const tag = `<h1>This is ${labtop.model} of ${labtop.year} of ${labtop.price}</h1>`;
const newTag = `<h1>This is ${model} of ${year} of ${price}</h1>`;

const labtops = [
	{
		model: 'gram',
		year: 2018,
		price: 1000000,
	},
	{
		model: 'macbook',
		year: 2017,
		price: 1250000,
	},
	{
		model: 'ativ',
		year: 2015,
		price: 1800000,
	},
];

labtops.map(({ model, year, price }) => {
	return `<h1>${model} and ${year} and ${price}</h1>`;
});

console.log(labtops);
