import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxTaskItem = (props) => {
    const month = props.date.toLocaleString('en-US', { month: '2-digit' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    let year = props.date.getFullYear();
    year = year.toLocaleString().replace(/,/g,'');
      
    const taskDate = year.toLocaleString() + '-' + month.toLocaleString() + '-' + day.toLocaleString();

    const TaskTemplate = (
        <div>
            <ListItem id={props.id}>
            <Checkbox 
                defaultChecked={props.completed} //{props.completed ? props.completed : false} 
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <ListItemText primary={props.ClassCode + ' - ' + props.assignment} htmlFor={props.id}/>
            <ListItemText secondary={taskDate}/>
            </ListItem>
        </div>
    );

    return (
        <div>
            {TaskTemplate}
        </div>
    );
};

export default CheckBoxTaskItem;