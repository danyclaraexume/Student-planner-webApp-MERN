import React, {useState} from 'react';
import List from '@material-ui/core/List';
import {Grid} from '@material-ui/core'
import TaskItem from './TaskItem';
import './TaskItems.css'

const TaskItemList = (props) => {  
    const [tasks, setTasks] = useState(props.INITIAL_TASKS);

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id)
              return {...task, completed: !task.completed}
            return task;
          });
          setTasks(updatedTasks);
    }

    const activetaskList = tasks.filter(task => task.completed === false).map(task => (        
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

    const completedtaskList = tasks.filter(task => task.completed === true).map(task => (        
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
        <Grid container  spacing={1} direction="row" >
            <Grid item={true} sm ={6}>
                <h2>{props.ActiveTasksLabel}</h2>
                <List>
                    {activetaskList}
                </List>
            </Grid>
            <Grid item={true} sm ={6}>
            <h2>{props.CompletedTasksLabel}</h2>
            <List>
                {completedtaskList}
            </List>
            </Grid>
        </Grid>
    )    
};

export default TaskItemList;