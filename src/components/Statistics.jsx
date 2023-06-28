import PropTypes from 'prop-types';
import CompletedTraining from './CompletedTraining';

const Statistics = ( {training, onRemove, onEditing} ) => {
    console.log(training)
    return (
        <table>
            <thead>
                <tr>
                    <th className='table-heder'>Дата</th>
                    <th className='table-heder'>Пройдено км.</th>
                    <th className='action table-heder'>Действия</th>
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