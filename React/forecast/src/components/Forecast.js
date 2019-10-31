import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import './Forecast.css';

const Forecast = ({ forecast, unit }) => {
	// 기본적으로 list에 40개 데이터가 있는데, 10개만 출력
	const cut = forecast.list.slice(0, 10);

	const getHoursName = h => {
		// 24시간제를 12시간제로 활용하는 로직
		return h > 12 ? `오후 ${h - 12}시` : `오전 ${h}시`;
	};

	const data = cut.map(e => {
		return {
			time: `${getHoursName(new Date(e.dt * 1000).getHours())}`,
			// 오 한글 변수도 되넹
			기온:
				unit === 'c'
					? Math.round(e.main.temp)
					: // 섭씨를 화씨로 변환하는 공식
					  Math.round(e.main.temp * 9) / 5 + 32,
		};
	});

	const responsiveWidth = () => {
		const maxWidth = 500;
		const width = window.innerWidth - 10;

		return width > maxWidth ? maxWidth : width;
	};

	return (
		<div className="forecast">
			<LineChart width={responsiveWidth()} height={200} data={data}>
				<Line type="monotone" dataKey="기온" />
				<XAxis dataKey="time" />
				<YAxis domain={['dataMin - 1', 'dataMax + 1']} />
				{/* 마우스를 올리면 상세 데이터 출력 */}
				<Tooltip />
				{/* 범주 추가 */}
				<Legend />
			</LineChart>
		</div>
	);
};

export default Forecast;
