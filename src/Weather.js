import React, { useState } from 'react';
import axios from 'axios';

import WeatherDataInfo from './WeatherDataInfo';

export default function Weather(props) {
  const [weahterInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getInfo(response) {
    console.log(response);
    setWeatherInfo({
      ready: true,
      temperature: Math.round(response?.data?.temperature?.current),
      description: response?.data?.condition?.description,
      icon: response?.data?.condition?.icon,
      humidity: response?.data?.temperature?.humidity,
      wind: response?.data?.wind?.speed,
      date: new Date(response.data.time * 1000),
      city: response?.data?.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.shecodes.io/weather/v1/current?lat=38.71667&lon=-9.13333&key=d610f0bte2b08e415f7be30e72oaf90a&units=metric`;

    axios.get(url).then(getInfo);
  }

  if (weahterInfo.ready) {
    return (
      <div className='container'>
        <form className='p-5' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-9'>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control p-3 shadow-none'
                  placeholder='Type a city name'
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className='col-3'>
              <button type='submit' class='btn btn-primary'>
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherDataInfo data={weahterInfo} />
      </div>
    );
  } else {
    search();
    return 'Loading...';
  }
}
