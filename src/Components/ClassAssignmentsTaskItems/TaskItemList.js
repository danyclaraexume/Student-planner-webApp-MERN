import React from 'react';
import List from '@material-ui/core/List';

import CheckBoxTaskItem from './CheckBoxTaskItem';


const TaskItemList = (props) => {
    
    return(
        <div>
            <h3>{props.title}</h3>
            <List>  
            {props.items.map((task) => (
                <CheckBoxTaskItem ClassCode={task.classCode} Assignment={task.assignmentTitle} date={task.dueDate} />
            ))}
            </List>
        </div>
    )};

export default TaskItemList;