import React, { Component } from 'react';

export default class SearchBar extends Component {
	onChange = e => {
		this.props.handleKeyword(e.target.value);
	};

	onSubmit = e => {
		// form의 기본적인 특성을 죽임
		e.preventDefault();

		this.props.onSubmit();

		console.log(this.props.pageNo);
	};

	toNext = async () => {
		await this.props.toNext();
	};

	toPrev = async () => {
		await this.props.toPrev();
	};

	render() {
		return (
			<div className="ui segment container">
				<form className="ui form" onSubmit={this.onSubmit}>
					<label htmlFor="keyword">Search in Eng</label>
					<input type="text" id="keyword" onChange={this.onChange} />
				</form>
				{this.props.pageNo === 1 ? null : (
					<button className="ui primary btn" onClick={this.toPrev}>
						Prev
					</button>
				)}
				<button className="ui primary btn" onClick={this.toNext}>
					Next
				</button>
			</div>
		);
	}
}
