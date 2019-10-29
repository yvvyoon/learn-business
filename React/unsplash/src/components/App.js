import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

export default class App extends Component {
	state = {
		keyword: '',
		images: [],
		page: 1,
	};

	handleKeyword = word => {
		this.setState({ keyword: word });
	};

	onSubmit = async () => {
		const response = await unsplash.get('search/photos', {
			params: {
				query: this.state.keyword,
				page: this.state.page,
				per_page: 5,
			},
			// `search/photos?query=${word}`
		});

		this.setState({ images: response.data.results });

		console.log(response);
	};

	toNext = async () => {
		this.setState({ page: this.state.page + 1 });
		await this.onSubmit();

		console.log(this.state.page);
	};

	toPrev = async () => {
		this.setState({ page: this.state.page - 1 });
		await this.onSubmit();

		console.log(this.state.page);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar
					handleKeyword={this.handleKeyword}
					onSubmit={this.onSubmit}
					toNext={this.toNext}
					toPrev={this.toPrev}
					pageNo={this.state.page}
				/>
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
