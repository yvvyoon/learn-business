import React from 'react';

const ProductRow = ({ name, keyword, stocked, price, checked }) => {
	if (checked && !stocked) return null;
	// 입력한 keyword가 상품명에 포함되어 있지 않으면 null을 리턴
	// 현재 대소문자 구분하고 있음
	// if (!name.includes(keyword)) return null;

	// 대소문자 구분하지 않음
	if (!name.toLowerCase().includes(keyword.toLowerCase())) return null;

	return (
		// stocked가 true일 때 red로
		// false면 아무 변화 없음
		<tr style={{ color: !stocked && 'red' }}>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	);
};

export default ProductRow;
