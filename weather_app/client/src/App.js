import Search from './components/search/Search';
import './App.css';
import CurrentWeather from './components/current-weather/CurrentWeather';
import {WEATHER_API_URL, WEATHER_API_KEY} from './components/API';
import {useState, useEffect} from 'react'


function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState('null')

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const response = await fetch(`${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`);
    const data = await response.json();
    setCurrentWeatherData(data);
  }

  useEffect(() => {
    handleOnSearchChange({ value: `${40.75}, ${
      -111.88}` });  
  }, []);

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather data={currentWeatherData}/>
    </div>
  );
}

export default App;
