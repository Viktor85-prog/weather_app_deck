import './AddButton.css'

function AddButton({ setModalActive }) {


    return (
        <div>
            <button className="button"
                onClick={() => setModalActive(true)}
            >+
            </button >
        </div>
    );
}

export default AddButton;