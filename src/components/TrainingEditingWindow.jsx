import { useState } from "react";
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const TrainingEditingWindow = ({ active, setActive, workout, onAddWorkout }) => {

    let [distance, setInfo] = useState();
    
    const handlerSubmit = (event) => {
        event.preventDefault();

        onAddWorkout(event, {
            id: nanoid(),
            trainingInfo: {
                date: workout.trainingInfo.date,
                distance: +distance
            }
        });

        setInfo('');

        event.target.distance.value = '';
    }


    let dateForm = new Date(workout.trainingInfo.date).toLocaleDateString('ru-Ru', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })  .split('.')
        .reverse()
        .join('-')

    return (
        <div 
            className={active ? "wrapper-modal-editing active" : "wrapper-modal-editing" } 
            onClick={() => setActive(false)}
            >
            <form 
                className="modal-editing" 
                onSubmit={handlerSubmit} 
                onClick={e => e.stopPropagation()}
                >

                <label htmlFor="date">
                    Дата 
                    <input 
                        type="date" 
                        name="date" 
                        value={dateForm} 
                        disabled 
                    />
                </label>

                <label htmlFor="distance">
                    Пройдено км. 
                    <input 
                        type="text" 
                        name="distance" 
                        placeholder={workout.trainingInfo.distance}
                        onChange={e => setInfo(+e.target.value)}
                    />
                </label>

                <button className="modal-button" onClick={()=>setActive(false)}>OK</button>

            </form>
        </div>
    )
}

TrainingEditingWindow.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    workout: PropTypes.object,
    onAddWorkout: PropTypes.func
}

export default TrainingEditingWindow;