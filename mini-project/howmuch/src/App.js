import React from 'react';
import Axios from 'axios';

import './App.css';

export default class App extends React.Component {
	state = {
		markets: [],
	};

	getMarkets = async () => {
		const markets = await Axios.get(
			'https://api.bithumb.com/public/ticker/all',
		);

		this.setState({
			// Axios는 기본적으로 하위에 data라는 객체를 갖고 있으므로
			// data를 한번 더 써줘야 함
			markets: markets.data.data,
		});
	};

	async componentDidMount() {
		await setInterval(() => {
			this.getMarkets();
		}, 1000);

		Object.keys(this.state.markets).forEach(key => {
			const symbol = key;
			const price = Math.round(
				this.state.markets[key].acc_trade_value /
					this.state.markets[key].units_traded,
			);

			console.log(`${symbol} => ${price}`);
		});
	}

	render() {
		return (
			<div className="container">
				<h1>How Much?</h1>
				<table className="table">
					<thead>
						<tr className="tr">
							<td className="td">이름</td>
							<td className="td">가격</td>
							<td className="td">24시간 변동가</td>
							<td className="td">24시간 변동률</td>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.state.markets).map(key => {
							return (
								<>
									{this.state.markets[key].acc_trade_value ==
									0 ? null : (
										<tr className="tr">
											<td className="td">{key}</td>
											<td className="td">
												￦&nbsp;
												{Math.round(
													this.state.markets[key]
														.acc_trade_value /
														this.state.markets[key]
															.units_traded,
												)
													.toString()
													.replace(
														/\B(?=(\d{3})+(?!\d))/g,
														',',
													)}
											</td>
											<td
												className={
													this.state.markets[key]
														.fluctate_24H < 0
														? 'price-down td'
														: 'price-up td'
												}
											>
												￦&nbsp;
												{
													this.state.markets[key]
														.fluctate_24H
												}
											</td>
											<td
												className={
													this.state.markets[key]
														.fluctate_24H < 0
														? 'price-down td'
														: 'price-up td'
												}
											>
												{
													this.state.markets[key]
														.fluctate_rate_24H
												}
												&nbsp;%
											</td>
										</tr>
									)}
								</>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
