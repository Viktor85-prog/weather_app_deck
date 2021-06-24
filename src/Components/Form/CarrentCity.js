import './SearchCity.css'
import './CurrentCity.css'
import { useState } from 'react';


const CurrentCity = ({ active, cityName, temperature, icon, currentCityExit }) => {
    // debugger
    // console.log()

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => currentCityExit()}>
            <div class={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="current-city">
                    <div className="current-city__head">
                        <div>
                            <h2 className="current-city__name">{cityName}</h2>
                        </div>
                        <div><button className="current-city__exit" onClick={() => currentCityExit()}></button></div>
                    </div>
                    <div className="current-city__content">
                        <div className="current-city__today block">
                            <div className="current-city__day">Сегодня</div>
                            <div>{temperature}  <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img></div>
                        </div>
                        <div className="current-city__sunrise block" >восход-закат</div>
                        <div className="current-city__tomorrow block">
                            <div className="current-city__day">Завтра</div>
                            <div>картинка</div>
                        </div>
                        <div className="current-city__sunrise block">восход-закат</div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default CurrentCity;