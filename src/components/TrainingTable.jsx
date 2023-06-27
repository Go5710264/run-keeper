import { nanoid } from 'nanoid'
import { useState } from 'react'
import DataEntryForm from './DataEntryForm'
import Statistics from './Statistics'

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
        console.log(training)
    }

    const deleteWorkout = (workoutId) => {
        setWorkout((preTraining) => preTraining.filter((workout) => workout.id !== workoutId))
    }

    return (
        <>
            <DataEntryForm onAddWorkout={addWorkout} />
            <Statistics onRemove={deleteWorkout} training={training} />
        </>
    )
}

export default TrainingTable;
