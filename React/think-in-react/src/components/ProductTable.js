import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

const ProductTable = props => {
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
				{props.data.map(({ category, price, stocked, name }) => {
					// 이전 인덱스의 카테고리와 현재 카테고리가 다르면
					// 새로운 카테고리로 변경
					if (category !== prevCategory) {
						prevCategory = category;

						return (
							<>
								<ProductCategoryRow category={category} />
								<ProductRow
									name={name}
									price={price}
									stocked={stocked}
									keyword={props.keyword}
									checked={props.checked}
								/>
							</>
						);
					}

					return (
						<ProductRow
							name={name}
							price={price}
							stocked={stocked}
							keyword={props.keyword}
							checked={props.checked}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default ProductTable;
