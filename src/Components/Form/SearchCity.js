import './SearchCity.css'
import { useState } from 'react';


const SearchCity = ({ active, addCity, searchCityHandle }) => {

    const [newCityName, setNewCityName] = useState();
    const [newCityId, setNewCityId] = useState();
    // <div className='modal__error'>{error ? (error) : ' '}</div>


    return (
        <div>
            <div className={active ? "modal active" : "modal"} onClick={() => searchCityHandle(false)}>
                <div class={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                    <div className="modal__head">
                        <div>
                            <h2 className="modal__name">Добавить</h2>
                        </div>
                        <div><button className="exit" onClick={() => searchCityHandle(false)}></button></div>
                    </div>
                    <div class="modal__container">
                        <div className='modal__cityname'>
                            <h2>Название</h2>
                            <input
                                onChange={(e) => { setNewCityName(e.target.value) }}
                                type="text"
                                name="cityname"
                                placeholder="введите город" />
                        </div>
                        <div className='modal__citykey'>
                            <h2>Код</h2>
                            <input
                                onChange={(e) => { setNewCityId(e.target.value) }}
                                type="text"
                                name="citykey"
                                placeholder="введите код города" />
                        </div>
                    </div>

                    <div >
                        <button type="submit" className='modal__submit'
                            onClick={() => { addCity(newCityName, newCityId) }}
                        >
                            Сохранить</button></div>
                </div>
            </div >
        </div>
    );

}

export default SearchCity;