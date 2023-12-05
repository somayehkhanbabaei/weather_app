import Weather from './Weather';

function App() {
  return (
    <div className='App'>
      <Weather defaultCity='Utrecht' />
      <p className='mt-5'>
        Created by Somayeh Khanbabaei{' '}
        <a href='https://github.com/somayehkhanbabaei/weather_app'>
          Open Source
        </a>
      </p>
    </div>
  );
}

export default App;
