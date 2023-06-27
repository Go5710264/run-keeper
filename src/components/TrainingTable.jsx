import { nanoid } from 'nanoid'
import { useState } from 'react'
import DataEntryForm from './DataEntryForm'
import Statistics from './Statistics'
import TrainingEditingWindow from './TrainingEditingWindow'

const TrainingTable = () => {

    const [ training, setWorkout] = useState([
        {
            id: nanoid(),
            trainingInfo: {
                date: "01.05.1995",
                distance: '15'
            }
        }
    ])

    const addWorkout = (workout) => {
        setWorkout((preTraining) => [...preTraining, workout])
    }

    const deleteWorkout = (workoutId) => {
        setWorkout((preTraining) => preTraining.filter((workout) => workout.id !== workoutId))
    }

    const editingWorkout = (e, id) => {
        // e.preventDefault();
        console.log(e, id)
        
        return (
            <TrainingEditingWindow />
        )
        // return setWorkout(training.find(item => item.id === workoutId))
    }

    return (
        <>
            <DataEntryForm onAddWorkout={addWorkout} />
            <Statistics 
                onRemove={deleteWorkout} 
                onEditing={editingWorkout} 
                training={training} 
            />
        </>
    )
}

export default TrainingTable;
