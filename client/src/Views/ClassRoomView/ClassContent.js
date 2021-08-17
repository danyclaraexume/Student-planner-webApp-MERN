import React from 'react'
import MuiTab from '../../Components/HorizontalTabBar/HorizontalTab'
import ClassSchedule from './ClassSchedule'
import Assignment from './Assignments'
import ExamTab from './Exam'
import EventTab from './Event'
import NoteBookTab from './NoteBook'

const ClassRoom = () => {
    const components = [
        <ClassSchedule />,
        <Assignment />,
        <ExamTab />,
        <EventTab />,
        <NoteBookTab />
    ];

    const tabsLabels = ['Schedule', 'Assignments','Exams','Events','NoteBook'];

    return(
        <MuiTab label={tabsLabels} content={components} />
    )
}

export default ClassRoom;