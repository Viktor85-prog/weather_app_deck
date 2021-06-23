import './ModalForm.css'
import { useState } from 'react';


const ModalForm = ({ active, setActive, addCity, error }) => {

    const [newCityName, setNewCityName] = useState();

    const onButtonClick = (newCityName) => {

        addCity(newCityName);
        // setActive(false);
        // setNewCityName('')
        // setTimeout(setActive(false), 3000);
        // f1000()
    }


    return (
        <div>
            {/* <div >{error ? (error) : ''}</div> */}
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div class={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                    <div className="modal__head">
                        <div>
                            <h2 className="modal__name">Добавить</h2>
                        </div>
                        <div><button className="exit" onClick={() => setActive(false)}></button></div>
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
                            <input type="text" name="citykey" placeholder="введите код города" />
                        </div>
                    </div>
                    <div >
                        <button type="submit" className='modal__submit'
                            onClick={() => { onButtonClick(newCityName) }}
                        // onClick={onButtonClick(newCityName)}
                        // onClick={() => { addCity(newCityName) }}
                        // onClick={() => setActive(false)}
                        // onClick={() => { setNewCityName(newCityName = '') }}
                        >
                            Сохранить</button></div>
                </div>
            </div >
        </div>
    );

}

export default ModalForm;