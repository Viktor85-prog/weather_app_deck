import './AllCity.css'



const City = ({ cityName, temperature, weather, icon }) => {

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


export default City