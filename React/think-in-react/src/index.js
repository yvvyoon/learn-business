import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductCategoryRow from './components/ProductCategoryRow';
import ProductRow from './components/ProductRow';

// const data = [
// 	{
// 		category: 'Sporting Goods',
// 		price: '$49.99',
// 		stocked: true,
// 		name: 'Football',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$9.99',
// 		stocked: true,
// 		name: 'Baseball',
// 	},
// 	{
// 		category: 'Sporting Goods',
// 		price: '$29.99',
// 		stocked: false,
// 		name: 'Basketball',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$99.99',
// 		stocked: true,
// 		name: 'iPod Touch',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$399.99',
// 		stocked: false,
// 		name: 'iPhone 5',
// 	},
// 	{
// 		category: 'Electronics',
// 		price: '$199.99',
// 		stocked: true,
// 		name: 'Nexus 7',
// 	},
// ];

class App extends React.Component {
	state = {
		keyword: '',
		checked: false,
		data: null,
	};

	async getData(url) {
		const res = await axios.get(url);
		const { data } = res;
		// const data = res.data; 와 동일

		data.sort((a, b) => {
			return a.category > b.category
				? -1
				: a.category < b.category
				? 1
				: 0;
		});

		this.setState({ data });
		// this.setState({ data: data }); 와 동일

		console.log(this.state.data);
	}

	componentDidMount() {
		// Axios로 API를 찔러서 데이터 가져오기
		const url = 'https://frozen-ocean-08299.herokuapp.com';

		this.getData(url);
	}

	handleKeywordChange = typedKeyword => {
		this.setState({ keyword: typedKeyword });
	};

	handleChecked = () => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		return (
			<>
				<SearchBar
					// props를 통해 SearchBar 컴포넌트에 각 메소드 전달
					handleKeywordChange={this.handleKeywordChange}
					handleChecked={this.handleChecked}
				/>
				<ProductTable
					data={this.state.data}
					// props를 통해 ProductTable 컴포넌트에 각 state 전달
					keyword={this.state.keyword}
					checked={this.state.checked}
				/>
			</>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
