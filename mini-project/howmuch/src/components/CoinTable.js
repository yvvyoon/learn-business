import React from 'react';

import CoinCategory from './CoinCategory';
import CoinRow from './CoinRow';

const CoinTable = prices => {
	return (
		<div>
			${prices}
			<table>
				<thead>{/* <CoinCategory /> */}</thead>
				<tbody>{/* <CoinRow /> */}</tbody>
			</table>
		</div>
	);
};

export default CoinTable;
