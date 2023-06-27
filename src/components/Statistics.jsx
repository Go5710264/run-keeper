import PropTypes from 'prop-types';
import CompletedTraining from './CompletedTraining';

const Statistics = ( {training, onRemove, onEditing} ) => {
    console.log(training)
    return (
        <table>
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено км.</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {training.map((workout) => (
                    <CompletedTraining 
                        key={workout.id} 
                        workout={workout} 
                        onRemove={onRemove}
                        onEditing={onEditing}
                    />
                ))}
            </tbody>
        </table>
    )
}

Statistics.propTypes = {
    training: PropTypes.object,
    onRemove: PropTypes.func,
    onEditing: PropTypes.func,
}

export default Statistics;