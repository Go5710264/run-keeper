import { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

const DataEntryForm = ({ onAddWorkout }) => {

    const [trainingInfo, setInfo] = useState();

    const handlerSubmit = (event) => {
        event.preventDefault();

        const {distance: dist} = trainingInfo;

        onAddWorkout({
            id: nanoid(),
            trainingInfo
        }, dist);

        setInfo('');

        event.target.date.value = '';
        event.target.distance.value = '';
    }

    const dateHandler = (event) => {

        const timestamp = new Date(event.target.value).getTime();

        setInfo({...trainingInfo, date: timestamp})
    }

    const distanceHandler = (event) => {
        setInfo({...trainingInfo, distance: +event.target.value})
    }


    return (
        <form className="form-submit" onSubmit={handlerSubmit}>

            <div className="form-data">
                <label htmlFor="date" className="form-header">Дата</label>
                <input type="date" name="date" onChange={dateHandler}/>
            </div>

            <div className="form-data">
                <label htmlFor="distance" className="form-header">Пройдено км.</label>
                <input className='input-distance' type="text" name="distance" onChange={distanceHandler}/>
            </div>

            <button className="form-button">OK</button>

        </form>
    )
}

DataEntryForm.propTypes = {
    onAddWorkout: PropTypes.func
}

export default DataEntryForm;