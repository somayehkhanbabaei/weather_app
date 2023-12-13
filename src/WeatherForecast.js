import axios from 'axios';
import React, { useEffect, useState } from 'react';
import WeatherForecastDay from './WeatherForecastDay';
import './WeatherForecast.css';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function load() {
    let apiKey = 'd610f0bte2b08e415f7be30e72oaf90a';
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='forecastBox'>
        <div className='row'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className='col-2' key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
