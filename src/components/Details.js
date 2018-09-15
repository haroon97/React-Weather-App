import React from 'react';
import WeatherComponent from './WeatherFonts';
import { Statistic, Button, Header } from 'semantic-ui-react';

const Details = (props) => {
  return (
    <div>
      <Header as='h3' textAlign='center' color='blue'>
        <Header.Content className='p'>The weather conditions are:</Header.Content>
      </Header>
      <div className='statistics'>
      <Statistic.Group widths='six'>
      <Statistic>
        <Statistic.Value>{props.data.weather[0].main}</Statistic.Value>
        <Statistic.Label>{props.data.weather[0].description}</Statistic.Label>
      </Statistic>
  
      <Statistic>
        <Statistic.Value>
          {props.temp === 'celcius' && props.data.main.temp}
          {props.temp === 'faranheit' && Math.round(props.data.main.temp * 1.8 + 32)}
          {props.temp === 'kelvin' && Math.round(props.data.main.temp + 273.15)}
        </Statistic.Value>
        <Statistic.Label>Temperature</Statistic.Label>
      </Statistic>
  
      <Statistic>
        <Statistic.Value>
        {props.data.main.humidity}%
        </Statistic.Value>
        <Statistic.Label>Humidity</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
        {props.data.visibility / 1000}km
        </Statistic.Value>
        <Statistic.Label>Visibility</Statistic.Label>
      </Statistic>

      <Statistic>
        <Statistic.Value>
        {props.data.name},{props.data.sys.country}
        </Statistic.Value>
        <Statistic.Label>Location</Statistic.Label>
      </Statistic>   
    </Statistic.Group>
    </div>

    <WeatherComponent data={props.data}/>
      <div className='buttons'>
      <Button onClick={props.Celcius} color='red'>Celcius</Button>
      <Button onClick={props.Faranheit} color='orange'>Faranheit</Button>
      <Button onClick={props.Kelvin} color='blue'>Kelvin</Button>
      </div>
    </div>
  );
}

export default Details;