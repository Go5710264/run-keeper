import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

const DataEntryForm = ({ onAddWorkout }) => {

    const [trainingInfo, setInfo] = useState();

    const handlerSubmit = (event) => {
        event.preventDefault();

        onAddWorkout({
            id: nanoid(),
            trainingInfo
        });

        setInfo('');

        event.target.date.value = '';
        event.target.distance.value = '';
    }

    const dateHandler = (event) => {

        let invertedDate = event.target.value
        .split('-')
        .reverse()
        .join('.');

        setInfo({...trainingInfo, date: invertedDate})
    }

    const distanceHandler = (event) => {
        setInfo({...trainingInfo, distance: event.target.value})
    }


    return (
        <form className="form-submit" onSubmit={handlerSubmit}>

            <div className="form-data">
                <label htmlFor="date">Дата</label>
                <input type="date" name="date" onChange={dateHandler}/>
            </div>

            <div className="form-data">
                <label htmlFor="distance">Пройдено км.</label>
                <input type="text" name="distance"onChange={distanceHandler}/>
            </div>

            <button>OK</button>

        </form>
    )
}

DataEntryForm.propTypes = {
    onAddWorkout: PropTypes.func
}

export default DataEntryForm;