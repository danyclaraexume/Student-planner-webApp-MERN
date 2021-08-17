import React from 'react'
import TaskItemList from '../../Components/TaskItems/TaskItemList'

const TASKS_DATA = [
    {
        id: 'e1',
        classCode: 'IFT-1001',
        assignmentTitle: 'Final',
        completed: true,
        dueDate: new Date(2021, 7, 14)
    },
    {   
        id: 'e2',
        classCode: 'IFT-1002',
        assignmentTitle: 'Test 1',
        completed: true,
        dueDate: new Date(2021, 6, 12)
    },
    {
        id: 'e3',
        classCode: 'IFT-1003',
        assignmentTitle:  'Intra',
        completed: false,
        dueDate: new Date(2021, 8, 10)
    },
    {
        id: 'e4',
        classCode: 'IFT-1004',
        assignmentTitle: 'Rapport Stage 1',
        completed: false,
        dueDate: new Date(2020, 9, 16)
    }
];

const ExamTab = () => {
    return(
        <TaskItemList INITIAL_TASKS={TASKS_DATA} ActiveTasksLabel="Upcoming Exam" CompletedTasksLabel="Completed Exam" />
    )};

export default ExamTab;