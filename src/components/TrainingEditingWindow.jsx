const TrainingEditingWindow = ({ active, setActive }) => {
    return (
        <div className={active ? "wrapper-modal-editing active" : "wrapper-modal-editing" } onClick={() => setActive(false)}>
            <form className="modal-editing" onClick={e => e.stopPropagation()}>

                <label htmlFor="date">Дата <input type="date" name="date" /></label>

                <label htmlFor="distance">Пройдено км. <input type="text" name="distance"/></label>

                <button>OK</button>

            </form>
        </div>
    )
}

export default TrainingEditingWindow;