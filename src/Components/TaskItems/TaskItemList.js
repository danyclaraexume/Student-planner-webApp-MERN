import React from 'react';
import List from '@material-ui/core/List';
import TaskItem from './TaskItem';


const TaskItemList = (props) => {    
    const onChangeHandler = (isChecked) =>{
        const anObject = {
            id: isChecked.id,
            newChecked:isChecked.newChecked
        };
        props.OnItemChanged(anObject);

        return(anObject.newChecked);
    };

    let changedCheck = onChangeHandler;

    return(
        <div>
            <h3>{props.title}</h3>
            <List>  
            {props.items.map((task) => (
                <TaskItem 
                    key={Math.random().toString()} 
                    id={task.id}
                    ClassCode={task.classCode} 
                    assignment={task.assignmentTitle} 
                    date={task.dueDate} 
                    defaultChecked={task.checked} checked={changedCheck} />
            ))}
            </List>
        </div>
    )};

export default TaskItemList;