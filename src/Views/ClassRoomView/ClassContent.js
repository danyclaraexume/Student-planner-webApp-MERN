import React from 'react'
import Classtab from '../../Components/HorizontalTab'
import ClassSchedule from './ClassSchedule'
import Assignment from './Assignments'



const ClassRoom = () => {
    const components = [
        <ClassSchedule/>,
        <Assignment/>
    ];

    const tabsLabels = ['ClassSchedule', 'Assignment'];

    return(
        <Classtab label={tabsLabels} content={components} index={tabsLabels} />
    )
}

export default ClassRoom;