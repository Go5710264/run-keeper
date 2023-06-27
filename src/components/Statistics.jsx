import PropTypes from 'prop-types';
import CompletedTraining from './CompletedTraining';

const Statistics = ( {training, onRemove} ) => {
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
                    />
                ))}
            </tbody>
        </table>
    )
}

Statistics.propTypes = {
    training: PropTypes.object,
    onRemove: PropTypes.func
}

export default Statistics;