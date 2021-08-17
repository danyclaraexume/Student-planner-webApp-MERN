import React from 'react'
import Program from '../../Components/Program/Program';
import Grades from '../../Components/Grades/Grades'
import GoalGrid from '../../Components/Goal/GoalGrid'
import MuiTab from '../../Components/HorizontalTabBar/HorizontalTab'


const Progress = () => {

    const components = [
        <Program />,
        <Grades />,
        <GoalGrid />
    ];

    const tabsLabels = ['Program', 'Grades','Estimate'];

    
    return(
        <MuiTab label={tabsLabels} content={components} />
    )
}

export default Progress;