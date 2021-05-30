import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxTaskItem = (props) => {
        const month = props.date.toLocaleString('en-US', { month: '2-digit' });
        const day = props.date.toLocaleString('en-US', { day: '2-digit' });
        let year = props.date.getFullYear();
        year = year.toLocaleString().replace(/\,/g,'');
      
        const taskDate = year.toLocaleString() + '-' + month.toLocaleString() + '-'+ day.toLocaleString();

return (
    <ListItem>
        <Checkbox/>
        <ListItemText primary={props.ClassCode + ' - ' + props.Assignment}/>
        <ListItemSecondaryAction>
            <ListItemText secondary={taskDate}/>
        </ListItemSecondaryAction>
    </ListItem>
);
};

export default CheckBoxTaskItem;