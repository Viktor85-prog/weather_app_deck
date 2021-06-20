import './ModalForm.css'

const ModalForm = ({ active, setActive }) => {

    return (
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
                        <input type="text" name="cityname" placeholder="введите город" />
                    </div>
                    <div className='modal__citykey'>
                        <h2>Код</h2>
                        <input type="text" name="citykey" placeholder="введите код города" />
                    </div>
                </div>
                <div className='modal__submit'><button type="submit">Отправить</button></div>
            </div>

        </div >
    );
}

// return (
//     <div>
//         <button className="button"
//             onClick={() => { addCity(newCityName) }}
//         >+
//         </button >
//         <input className='addForm addFormCityName'
//             onChange={(e) => { setNewCityName(e.target.value) }} />
//         <input className='addForm addFormCityCode'></input>
//     </div>
// );

export default ModalForm;