const DataEntryForm = () => {

    const handlerSubmit = (event) => {
        event.preventDefault();

        console.log('hi')
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label htmlFor="date">Дата</label>
            <input type="date" name="date"/>
            <label htmlFor="distance">Пройдено км.</label>
            <input type="text" name="distance" />
            <button>OK</button>
        </form>
    )
}

export default DataEntryForm;