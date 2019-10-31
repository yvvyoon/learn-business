import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Current from './Current';
import Forecast from './Forecast';
import Spinner from './Spinner';

import './App.css';

const App = () => {
	const APPID = '00d697c5fe1c098a9832ae421bc90989';
	const [current, setCurrent] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [unit, setUnit] = useState('c');

	const getLocation = () => {
		return new Promise((resolve, reject) => {
			window.navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	};

	const getTemp = async coords => {
		// : 뒤에 별칭 사용 가능
		const { latitude: lat, longitude: lon } = coords;
		const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
		const res = await Axios.get(url);
		const { data } = res;

		setCurrent(data);
		console.log(data);
	};

	const getHourlyTemp = async coords => {
		const { latitude: lat, longitude: lon } = coords;
		const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APPID}&units=metric&lang=kr`;
		const res = await Axios.get(url);
		const { data } = res;

		setForecast(data);
		console.log(data);
	};

	const getAll = async () => {
		try {
			const { coords } = await getLocation();

			await getTemp(coords);
			await getHourlyTemp(coords);
		} catch (e) {
			console.error(e);
			alert(e);
		}
	};

	// Hook 사용
	// const [count, setCount] = useState(0);
	// const [number, setNumber] = useState(1);
	// state = {
	//     count: 0,
	// }

	console.log('useEffect 발생');

	// useEffect(() => {
	// 	document.title = `U clicked ${count} times`;
	// }, [count, number]);
	// componentDidMount와 동일한 기능
	// 두번째 인자인 배열에 state를 설정해주면
	// 해당 state에만 useEffect만 발생

	useEffect(() => {
		getAll();
	}, []);

	return (
		<>
			<header className="header-padding">
				<h1>일기예보</h1>
			</header>
			<main className="container">
				{!current || !forecast ? (
					<Spinner />
				) : (
					// 모든 조건문 로직에서는 한 컴포넌트만 써야 함
					<>
						<Current
							current={current}
							unit={unit}
							setUnit={setUnit}
						/>
						,
						<Forecast forecast={forecast} unit={unit} />
					</>
				)}
			</main>
		</>
	);
};

export default App;
