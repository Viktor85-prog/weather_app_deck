import './AddButton.css'
import { useState } from 'react';

function AddButton({ addCity }) {

    const [newCityName, setNewCityName] = useState();

    return (
        <div>
            <button className="button"
                onClick={() => { addCity(newCityName) }}
            >+
            </button >
            <input className='addForm addFormCityName'
                onChange={(e) => { setNewCityName(e.target.value) }} />
            <input className='addForm addFormCityCode'></input>
        </div>
    );
}

export default AddButton;