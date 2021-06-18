import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const API_KEY = '0d56ed01b42743ed94fbfe658c541709';
  const city = "Kazan"

  const [weather, setWeather] = useState('HOT');
  const [temperature, setTemperature] = useState(30);
  const [cityName, setCityName] = useState('Kazan')

  const savePositionToState = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(savePositionToState);
      const res = await axios.get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      setCityName(res.data.name);
      setTemperature(Math.round(res.data.main.temp - 273.15))
      setWeather(res.data.weather[0].main)
      console.log(res.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchWeather();
  }, { latitude, longitude })




  return (
    <div className="App">
      <div className="App__container">
        <div className="main">
          <span className="main__city">{cityName}</span>
          <span className="main__temp">{temperature}°C</span>
          <span className="main__weather">{weather}</span>
          <span className="main__img">img</span>
        </div>
      </div>
    </div>
  );
}

export default App;
