import React, { useState } from 'react';
import axios from 'axios';

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showTemperature);

  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
      <p>
        The temperature in {props.city} is currently {Math.round(temperature)}°C
      </p>
    );
  } else {
    return <p>Loading temperature for {props.city}..</p>;
  }
}
