import PropTypes from 'prop-types';

const CompletedTraining = ( {workout} ) => {
    return (
        <tr>
            <td>{workout.trainingInfo.date}</td>
            <td>{workout.trainingInfo.distance}</td>
            <td>hi</td>
        </tr>
    )
}

CompletedTraining.propTypes = {
    workout: PropTypes.object,
    onRemove: PropTypes.func
}

export default CompletedTraining;