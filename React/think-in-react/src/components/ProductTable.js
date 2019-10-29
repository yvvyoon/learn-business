import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = ({ data, keyword, checked }) => {
	if (data === null) return <h2>Loading...</h2>;

	let prevCategory = '';

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{data.map(({ category, price, stocked, name }) => {
					const products = { name, price, stocked };

					// 이전 인덱스의 카테고리와 현재 카테고리가 다르면
					// 새로운 카테고리로 변경
					prevCategory = category;

					function categoryFilter(category) {
						if (prevCategory !== category) {
							return <ProductCategoryRow category={category} />;
						} else {
							return null;
						}
					}

					return (
						<>
							{categoryFilter(category)}
							<ProductRow
								{...products}
								keyword={keyword}
								checked={checked}
							/>
						</>
					);
				})}
			</tbody>
		</table>
	);
};

export default ProductTable;
