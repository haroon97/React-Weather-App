import React from 'react';
import WeatherIcon from 'react-icons-weather';

const WeatherComponent = (props) => {
    if (props.data.weather[0].main === 'Thunderstorm') {
        return (
            <div className='fonts'>
              <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
            </div>
          )
        }
        else if (props.data.weather[0].main === 'Drizzle') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="300" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].main === 'Rain') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="520" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].main === 'Snow') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="600" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].main === 'Clear') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="800" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].main === 'Clouds') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="803" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].description === 'smoke') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="711" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].description === 'mist') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="701" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].description === 'fog') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="741" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].description === 'haze') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="721" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else if (props.data.weather[0].description === 'sand') {
            return (
                <div className='fonts'>
                  <WeatherIcon name="owm" iconId="751" flip="horizontal" rotate="90" />
                </div>
              )
        }
        else {
            return null;
        }
 
}

export default WeatherComponent;