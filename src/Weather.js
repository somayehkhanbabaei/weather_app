// import React, { useState } from 'react';
// import axios from 'axios';

export default function Weather(props) {
  return (
    <div className='container'>
      <form className='p-5'>
        <div className='row'>
          <div className='col-9'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control p-3 shadow-none'
                placeholder='Type a city'
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

      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <div className='card-body cardInfo'>
              <h1>San Francisco</h1>
              <ul>
                <li>Wednesday 21:25, broken clouds</li>
                <li>Humidity: 66%, Wind: 3.13km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <div className='card-body text-center iconInfo'>
              <span className=''>☁️</span>
              <span className=''>15°C</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='row'>
        <div className='card'>
          <div className='card-body'>Coming soon</div>
        </div>
      </div> */}
    </div>
  );
}
