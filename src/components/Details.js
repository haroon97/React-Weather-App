import React from 'react';
import WeatherComponent from './WeatherFonts';


const Details = (props) => {
  return (
    <div>
      <p>The weather conditions are:</p>
      <h3>{props.data.weather[0].main},{props.data.weather[0].description}</h3>
      <WeatherComponent data={props.data}/>
      {props.temp === 'celcius' && <h3>Temperature: {props.data.main.temp}</h3>}
      {props.temp === 'faranheit' && <h3>Temperature: {props.data.main.temp * 1.8 + 32}</h3>}
      {props.temp === 'kelvin' && <h3>Temperature: {props.data.main.temp + 273.15}</h3>}
      <button onClick={props.Celcius}>Celcius</button>
      <button onClick={props.Faranheit}>Faranheit</button>
      <button onClick={props.Kelvin}>Kelvin</button>
      <h3>Humidity: {props.data.main.humidity}%</h3>
      <h3>Visibility: {props.data.visibility / 1000}km</h3>
      <p>Your coordinates are: {props.data.coord.lon},{props.data.coord.lat}</p>
      <p>Your location: {props.data.name},{props.data.sys.country}</p>
    </div>
  );
}

export default Details;