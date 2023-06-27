const TrainingEditingWindow = () => {
    return (
        <form >

            <label htmlFor="date">Дата</label>
            <input type="date" name="date" />


            <label htmlFor="distance">Пройдено км.</label>
            <input type="text" name="distance"/>

            <button>OK</button>
        </form>
    )
}

export default TrainingEditingWindow;