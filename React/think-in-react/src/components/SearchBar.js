import React from 'react';

const SearchBar = ({ handleKeywordChange, handleChecked }) => {
	return (
		<form>
			<input
				type="text"
				placeholder="Search..."
				// input 태그에서 입력한 데이터를 e에 담아서
				// target.value로 handleKeyworldChange()로 전달
				onChange={e => handleKeywordChange(e.target.value)}
			/>
			<p>
				<input type="checkbox" onChange={handleChecked} />
				Only show products in stock
			</p>
		</form>
	);
};

export default SearchBar;
