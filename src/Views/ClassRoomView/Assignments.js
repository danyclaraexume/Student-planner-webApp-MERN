import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import List from '@material-ui/core/List';
import TaskItem from '../../Components/TaskItems/TaskItem'

const INITIAL_TASKS = [
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
    const [activeTasks, setActiveTasks] = useState(INITIAL_TASKS.filter(task => task.completed === false));
    const [completedTasks, setCompletedTasks] = useState(INITIAL_TASKS.filter(task => task.completed === true));

    const toggleTaskCompleted = (id) => {
        let remainingTasks;
        let currentTask;
        let newValue ;

        if(activeTasks.find(task => task.id === id)) {
            currentTask = activeTasks.find(task => task.id === id);
            newValue = !currentTask.completed;
            currentTask.completed = newValue;
            setCompletedTasks([...completedTasks, currentTask]);
            remainingTasks = activeTasks.filter(task => id !== task.id);
            setActiveTasks(remainingTasks);
        }

        else if(completedTasks.find(task => task.id === id)){
            currentTask = completedTasks.find(task => task.id === id);
            newValue = !currentTask.completed;
            currentTask.completed = newValue;
            setActiveTasks([...activeTasks, currentTask]);
            remainingTasks = completedTasks.filter(task => id !== task.id);
            setCompletedTasks(remainingTasks);
        }
    }

    const activetaskList = activeTasks.map(task => (        
        <TaskItem 
            key={task.id} 
            id={task.id}
            ClassCode={task.classCode} 
            assignment={task.assignmentTitle} 
            date={task.dueDate} 
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted} 
        />
    ));

    const completedtaskList = completedTasks.map(task => (
        <TaskItem 
            key={task.id} 
            id={task.id}
            ClassCode={task.classCode} 
            assignment={task.assignmentTitle} 
            date={task.dueDate} 
            completed={task.completed}
            toggleTaskCompleted={toggleTaskCompleted} 
        />
    ));

    return (
        <Grid container spacing={2} direction="row" >
            <Grid item={true} xs ={5}>
                <h2>Due Assignments</h2>
                <List>
                    {activetaskList}
                </List>
            </Grid>
            <Grid item={true} xs ={5}>
            <h2>Completed Assignments</h2>
            <List>
                {completedtaskList}
            </List>
            </Grid>
        </Grid>
    )
}

export default Assignment;