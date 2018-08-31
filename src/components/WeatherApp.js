import React from 'react';
import Header from './Header';
import SearchWeather from './SearchWeather';
import Details from './Details';

class WeatherApp extends React.Component {

  state = {
    weather: {},
    temp: 'celcius',
    city: '',
    country: '',
    isFetch: false,
    error: false
  }

  city = (e) => {
    this.setState( {city: e.target.value} )
  }

  country = (e) => {
    this.setState( {country: e.target.value} )
  }

  onSubmit = (e) => {
    e.preventDefault();
    const api_key = '51300dedec04a06be58e60718f328f3e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&units=metric&APPID=${api_key}`
    if (e.target.elements.city.value === '' || e.target.elements.country.value === '') {
      this.setState( {error: true} )
    }
    else {
      this.setState( {error: false} )
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState ( 
          {weather: data,
           isFetch: true} ) 
      })
      .catch((error) => {
        console.log('error', error);
      })
    }
  }

  Celcius = () => {
    this.setState( {temp: 'celcius'} )
  }

  Faranheit = () => {
    this.setState( {temp: 'faranheit'} )
  }

  Kelvin = () => {
    this.setState( {temp: 'kelvin'} )
  }

  render() {
    const title = 'The Weather Forcaster';
    const subTitle = 'Explore the weather around the globe';
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <SearchWeather city={this.city} country={this.country} onSubmit={this.onSubmit}/>
        {this.state.error && <p>Please enter a valid value</p>}
        {this.state.isFetch && <Details data={this.state.weather} Celcius={this.Celcius} Kelvin={this.Kelvin} Faranheit={this.Faranheit} temp={this.state.temp}/>}
      </div>
    );
  }
}

export default WeatherApp;