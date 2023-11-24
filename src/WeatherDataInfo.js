import FormattedDate from './FormattedDate';

export default function WeatherDataInfo({ data }) {
  return (
    <div className='row'>
      <div className='col-6'>
        <div className='card'>
          <div className='card-body cardInfo'>
            <h1>{data.city}</h1>
            <ul>
              <li>
                <FormattedDate data={data?.date} />
                {data.description}
              </li>
              <li>
                Humidity: {data.humidity}%, Wind: {data.wind}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card'>
          <div className='card-body text-center iconInfo'>
            <span className=''>{data.icon}</span>
            <span className=''>{data.temperature}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
