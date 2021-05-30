import React from 'react'
import {Grid} from '@material-ui/core'
import TaskItemList from '../../Components/ClassAssignmentsTaskItems/TaskItemList'

const INITIAL_TASKS = [
    {
        id: 't1',
        classCode: 'IFT-1003',
        assignmentTitle: 'Devoir 1',
        checked: true,
        dueDate: new Date(2021, 7, 14)
    },
    {   id: 't1',
        classCode: 'IFT-1003',
        assignmentTitle: 'TP 1',
        checked: true,
        dueDate: new Date(2021, 6, 12)
    },
    {
        id: 't1',
        classCode: 'IFT-1003',
        assignmentTitle:  'Projet de session',
        checked: false,
        dueDate: new Date(2021, 8, 10)
    },
    {
        id: 't1',
        classCode: 'IFT-1003',
        assignmentTitle: 'Rapport Stage 1',
        checked: false,
        dueDate: new Date(2020, 9, 16)
    },
  ];


const Assignment = () => {
     
    const currentTasks = INITIAL_TASKS.filter(task => {
        return task.checked === false;
    }); 

    const completedTasks = INITIAL_TASKS.filter(task => {
        return task.checked === true;
    });

    return(
        <Grid container spacing={2} direction="row" justify="center">
            <Grid item={true}>
                <TaskItemList items={currentTasks} title='Current Tasks' />
            </Grid>
            <Grid item={true}>
                <TaskItemList items={completedTasks} title='Completed Tasks' />
            </Grid>
        </Grid>
    )
}

export default Assignment;