import React from 'react';

const SearchBar = () => {
	return (
		<form>
			<span>
				<input type="text" placeholder="떡상 가즈아" />
			</span>
			&nbsp;
			<span className="radio">
				<input type="radio" value="KRW" checked="true" />
				KRW
				<input type="radio" value="BTC" />
				BTC
				<input type="radio" value="ETH" />
				ETH
			</span>
		</form>
	);
};

export default SearchBar;
