import React from 'react'
import TaskItemList from '../../Components/TaskItems/TaskItemList'

const TASKS_DATA = [
    {
        id: 't1',
        classCode: 'IFT-1001',
        assignmentTitle: 'Devoir 1',
        completed: true,
        dueDate: new Date(2021, 7, 14)
    },
    {   
        id: 't2',
        classCode: 'IFT-1002',
        assignmentTitle: 'TP 1',
        completed: true,
        dueDate: new Date(2021, 6, 12)
    },
    {
        id: 't3',
        classCode: 'IFT-1003',
        assignmentTitle:  'Projet de session',
        completed: false,
        dueDate: new Date(2021, 8, 10)
    },
    {
        id: 't4',
        classCode: 'IFT-1004',
        assignmentTitle: 'Rapport Stage 1',
        completed: false,
        dueDate: new Date(2020, 9, 16)
    }
];

const Assignment = () => {
   return (
    <TaskItemList INITIAL_TASKS={TASKS_DATA} ActiveTasksLabel="Due Assignments" CompletedTasksLabel="Completed Assignments" />
   );
}

export default Assignment;