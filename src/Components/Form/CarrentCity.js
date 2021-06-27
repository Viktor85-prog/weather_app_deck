import './SearchCity.css'
import './CurrentCity.css'
import { useState } from 'react';


const CurrentCity = ({ active, currentCityExit, currentCity }) => {
    debugger


    let secToTime = (seconds) => {
        let time = new Date(seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        return time
    }



    return (
        <div className={active ? "modal active" : "modal"} onClick={() => currentCityExit()}>
            <div class={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="current-city">
                    <div className="current-city__head">
                        <div>
                            <h2 className="current-city__name">{currentCity.cityName}</h2>
                        </div>
                        <div><button className="current-city__exit" onClick={() => currentCityExit()}></button></div>
                    </div>
                    <div className="current-city__content">
                        <div className="current-city__today block">
                            <div className="current-city__day">Сегодня</div>
                            <div className="current-city__tempimg">
                                <div className="current-city__temp">{currentCity.today.temperature}  </div>
                                <div><img src={`https://openweathermap.org/img/wn/${currentCity.today.icon}@2x.png`}></img></div>
                            </div>
                        </div>
                        <div className="current-city__sunrise block" >{`${secToTime(currentCity.today.sunrise)} - ${secToTime(currentCity.today.sunset)}`}</div>
                        <div className="current-city__tomorrow block">
                            <div className="current-city__day">Завтра</div>
                            <div className="current-city__tempimg">
                                <div>{currentCity.tomorrow.temperature}</div>
                                <div><img src={`https://openweathermap.org/img/wn/${currentCity.tomorrow.icon}@2x.png`}></img></div>
                            </div>
                        </div>
                        <div className="current-city__sunrise block">{`${secToTime(currentCity.tomorrow.sunrise)} - ${secToTime(currentCity.tomorrow.sunset)}`}</div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default CurrentCity;