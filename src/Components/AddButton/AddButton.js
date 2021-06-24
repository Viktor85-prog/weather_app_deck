import './AddButton.css'

function AddButton({ searchCityHandle }) {


    return (
        <div>
            <button className="button"
                onClick={() => searchCityHandle(true)}
            >+
            </button >
        </div>
    );
}

export default AddButton;