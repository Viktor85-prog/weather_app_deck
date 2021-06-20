const AnyCity = ({ cityName, temperature, weather, icon, deleteCity }) => {

    return (
        <div className="any">
            <div className="main">
                <div className="main__city column">{cityName}</div>
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