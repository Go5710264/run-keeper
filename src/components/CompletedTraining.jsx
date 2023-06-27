import PropTypes from 'prop-types';
import close from '../assets/close.svg';
import editing from '../assets/editing.svg'

const CompletedTraining = ( {workout, onRemove} ) => {
    console.log(workout)
    return (
        <tr>
            <td>{workout.trainingInfo.date}</td>
            <td>{workout.trainingInfo.distance}</td>
            <td>
                <img 
                    src={close} 
                    alt="Удалить тренировку" 
                    className='icon' 
                    onClick={() => onRemove(workout.id)} 
                />
                <img 
                    src={editing} 
                    alt="Редактировать тренировку" 
                    className='icon'/>
            </td>
        </tr>
    )
}

CompletedTraining.propTypes = {
    workout: PropTypes.object,
    onRemove: PropTypes.func
}

export default CompletedTraining;