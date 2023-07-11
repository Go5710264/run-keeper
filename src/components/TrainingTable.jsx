import { nanoid } from 'nanoid'
import { useState } from 'react'
import DataEntryForm from './DataEntryForm'
import Statistics from './Statistics'
import TrainingEditingWindow from './TrainingEditingWindow'

const TrainingTable = () => {

    let [ training, setWorkout] = useState([
        {
            id: nanoid(),
            trainingInfo: {
                date: 1686000000000,
                distance: 15
            }
        }
    ])

    const [modalActive, setModalActive] = useState(false);

    const addWorkout = (event, workout) => {

        setWorkout((preTraining) => {

            let data = preTraining.find((item) => item.trainingInfo.date === workout.trainingInfo.date);

            if(data && event.target.classList.contains('form-submit')) {
                workout.trainingInfo.distance = workout.trainingInfo.distance + data.trainingInfo.distance;
                preTraining = preTraining.filter(item => item.trainingInfo.date !== workout.trainingInfo.date)
            }

            if(event.target.classList.contains('modal-editing'))
                preTraining = preTraining.filter(item => item.trainingInfo.date !== workout.trainingInfo.date)

            return [...preTraining, workout].sort((a, b) => 
                a.trainingInfo.date < b.trainingInfo.date ? 1 : -1
            )
        })
     
    }

    const deleteWorkout = (workoutId, event) => {
        event.stopPropagation();

        setWorkout((preTraining) => preTraining.filter((workout) => workout.id !== workoutId))
    }

    let [trainingEditing, setTrainingEditing] = useState({
        id: nanoid(),
        trainingInfo: {
            date: 1686000000000,
            distance: 15
        }
    });

    const editingWorkout = (id, event) => {
        event.stopPropagation();
        
        setTrainingEditing(training.find(item => item.id === id))

        setModalActive(true)
    }

    return (
        <>
            <DataEntryForm onAddWorkout={addWorkout} />
            <Statistics 
                onRemove={deleteWorkout} 
                onEditing={editingWorkout} 
                training={training} 
            />

            <TrainingEditingWindow 
                active={modalActive} 
                setActive={setModalActive} 
                workout={trainingEditing}
                onAddWorkout={addWorkout}
            />
        </>
    )
}

export default TrainingTable;
