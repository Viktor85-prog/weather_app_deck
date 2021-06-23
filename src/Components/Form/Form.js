import './Form.css'


function Form() {

    return (
        <div className='form'>
            <div class="form__wrapper">
                <div className="form__head">
                    <div>
                        <h2 className="form__name">Добавить</h2>
                    </div>
                    <div><button className="exit">X</button></div>
                </div>
                <form action="#" method="get" enctype="multipart/form-data">
                    <div class="form__container">
                        <div className='form__cityname'>
                            <h2>Название</h2>
                            <input type="text" name="cityname" value="" placeholder="введите город" />
                        </div>
                        <div className='form__citykey'>
                            <h2>Код</h2>
                            <input type="text" name="citykey" value="" placeholder="введите код города" />
                        </div>
                    </div>
                    <div className='form__submit'><button type="submit">Отправить</button></div>
                </form>
            </div>

        </div >
    );
}


export default Form;