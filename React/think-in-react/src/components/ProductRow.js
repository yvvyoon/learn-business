import React from 'react';

const ProductRow = props => {
	return (
		// props.stocked가 true일 때 red로
		// false면 아무 변화 없음
		<tr style={{ color: !props.stocked && 'red' }}>
			<td>{props.name}</td>
			<td>{props.price}</td>
		</tr>
	);
};

export default ProductRow;
