import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[day];
  }

  return (
    <div className=' temperatureIfon text-center'>
      <div className='mb-2'>{day()}</div>
      <div className='mb-2'>{maxTemperature()}</div>
      <WeatherIcon
        className='mb-2'
        color='blue'
        icon={props.data.condition.icon}
        size={36}
      />
      <div>{minTemperature()}</div>
    </div>
  );
}
