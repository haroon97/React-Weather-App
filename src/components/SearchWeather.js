import React from 'react';

const SearchWeather = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input onChange={props.city} type='text' placeholder='Enter the city name' name='city' />
        <input onChange={props.country} type='text' placeholder='Enter country code' name='country'/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchWeather;