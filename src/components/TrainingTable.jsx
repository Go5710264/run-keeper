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
                date: 1686000000000,
                distance: '15'
            }
        }
    ])

    const addWorkout = (workout) => {
        const index = training.findIndex((wkt) => wkt.trainingInfo.date === workout.trainingInfo.date)
        
        console.log(index)

        if(index !== -1) {
            setWorkout((preTraining) => preTraining[index].trainingInfo.distance + workout.trainingInfo.distance)

            // При добавлении тренировки с датой, которая уже есть в таблице, дистанция не суммируется. Происходит перезагрузка страницы

        } else {
            setWorkout((preTraining) => [...preTraining, workout].sort((a, b) => 
                a.trainingInfo.date < b.trainingInfo.date ? 1 : -1
            ))
        }       
    }

    const deleteWorkout = (workoutId) => {
        setWorkout((preTraining) => preTraining.filter((workout) => workout.id !== workoutId))
    }

    const editingWorkout = (e, id) => {
        console.log(e, id)
        
        return (
            <TrainingEditingWindow />
            // Окно редактирования тренировки не отображается на странице, происходит перезагрузка 
        )
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
