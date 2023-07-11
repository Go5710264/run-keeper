import PropTypes from 'prop-types';
import CompletedTraining from './CompletedTraining';

const Statistics = ( {training, onRemove, onEditing} ) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className='table-header date'>Дата</th>
                    <th className='table-header'>Пройдено км.</th>
                    <th className='table-header action'>Действия</th>
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
    training: PropTypes.array,
    onRemove: PropTypes.func,
    onEditing: PropTypes.func,
}

export default Statistics;