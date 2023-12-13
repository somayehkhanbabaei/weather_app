import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherDataInfo({ data }) {
  return (
    <div className='row'>
      <div className='col-6 '>
        <div className='card'>
          <div className='card-body cardInfo'>
            <h1>{data.city}</h1>
            <ul>
              <li>
                <FormattedDate data={data?.date} />
              </li>
              <li className='mt-0'>
                Humidity: {data.humidity}%
                <br />
                Wind: {data.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card weatherIcon'>
          <div className='card-body iconInfo text-center mt-0'>
            <div className='text-white'>{data.description}</div>
            <div>
              <WeatherIcon color='white' icon={data?.icon} size={100} />
            </div>
            <div className='text-white weatherIcon_temp'>
              {data?.temperature}°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
