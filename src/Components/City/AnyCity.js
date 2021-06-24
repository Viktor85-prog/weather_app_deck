import './AllCity.css'




const AnyCity = ({ cityName, lat, lon, temperature, weather, icon, deleteCity, currentCityCall }) => {
    // debugger
    return (
        <div className="any">
            <div className="main">
                <div className="main__city column"
                    onClick={() => { currentCityCall(cityName, lat, lon) }}
                >{cityName}</div>
                <div className="main__temp column">{temperature}°C</div>
                <div className="main__weather column">{weather}</div>
                <div className="main__img column">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
                </div>

            </div>
            <button className="any__trash-img"
                onClick={() => { deleteCity(cityName) }}
            >
            </button>
        </div>
    );

}


export default AnyCity