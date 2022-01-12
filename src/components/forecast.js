import React, { useState,useEffect } from 'react';
import Moment from 'moment-timezone';
import Cloud from './icons/cloud';
import { baseURL, key } from '../axios_ins';
import Sunny from './icons/sunny';
import Rainy from './icons/rainy';
import axios from 'axios';

const Forecast = () => {
  	const [climate,getClimate] = useState();
	// const [city,setCity] = useState("Chennai"); 

	const weather ={
		Sunny:<Sunny />,
		cloud: <Cloud />,
		rainy: <Rainy />
	}

	useEffect(() => {
		axios.get(
			`${baseURL}/forecast.json?key=${key}&q=Sydney&days=1&aqi=no&alerts=no`
		)
		.then((response) => {
			getClimate(response.data)
			// console.log(response)
		}
		)
	},[])

	// const weatherShow = climate.forecast.forecastday[0].day.condition.text === "Sunny"? <Sunny/> : weather.rainy;
  	const today = Moment().format(" h:mm:ss a, ddd, MMM Do YYYY").toString();
  	console.log('today',climate?.forecast?.forecastday[0]?.day?.condition?.text);
  	return(
  	    <div className='weatherTemplate'>
  	        <div className='my-2'>
  	        	<h1>{today}</h1>
				{/* <input type="name" onSubmit={() => setCity}/> */}
  	        </div>
  	        {/* {weatherShow} */}
			<img src={climate?.forecast?.forecastday[0]?.day?.condition?.icon} alt='' className='w-100 spin' />
  	    </div>
  	)
}

export default Forecast;