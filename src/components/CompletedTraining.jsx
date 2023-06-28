import PropTypes from 'prop-types';
import close from '../assets/close.svg';
import editing from '../assets/editing.svg'

const CompletedTraining = ( {workout, onRemove, onEditing} ) => {

    const returnDate = (value) => {
        let invertedDate = new Date(value);
        
        return (
            invertedDate.getDate() +'.' + 
            (invertedDate.getMonth() + 1) + '.' + 
            invertedDate.getFullYear()
        )
    }
    return (
        <tr>
            <td>{returnDate(workout.trainingInfo.date)}</td>
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
                    className='icon'
                    onClick={(e)=> onEditing(e, workout.id)}    
                />
            </td>
        </tr>
    )
}

CompletedTraining.propTypes = {
    workout: PropTypes.object,
    onRemove: PropTypes.func,
    onEditing: PropTypes.func,
}

export default CompletedTraining;