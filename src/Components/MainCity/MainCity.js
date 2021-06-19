import axios from 'axios'
import { useEffect, useState } from 'react';
import './MainCity.css'


function MainCity() {

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const API_KEY = '0d56ed01b42743ed94fbfe658c541709';
    const city = "Kazan"

    const [weather, setWeather] = useState('HOT');
    const [temperature, setTemperature] = useState(30);
    const [cityName, setCityName] = useState('Kazan')
    const [icon, setIcon] = useState('')

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
            setIcon(res.data.weather[0].icon)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchWeather();
    }, { latitude, longitude })


    return (
        <div className="main">
            <div className="main__city column">{cityName}</div>
            <div className="main__temp column">{temperature}°C</div>
            <div className="main__weather column">{weather}</div>
            <div className="main__img column">
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            </div>
        </div>
    );
}

export default MainCity;
