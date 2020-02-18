import React from 'react';
import './App.css';
import Car from './Car/Car';

function App() {

	const state = {
		cars: [
			{ name: 'Ford', year: 2018 },
			{ name: 'Audi', year: 2016 },
			{ name: 'Mazda', year: 2010 }
		],
		pageTitle: 'React components'
	}

	const divStyle = {
		textAlign: 'center'
	}

	const cars = state.cars;

	return (

		<div style={divStyle}>
			<h1>{state.pageTitle}</h1>

			<Car name={cars[0].name} year={cars[0].year} />
			<Car name={cars[1].name} year={cars[1].year} />
			<Car name={cars[2].name} year={cars[2].year} />
		</div>
	);
}

export default App;
