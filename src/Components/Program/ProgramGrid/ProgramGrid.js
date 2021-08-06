import React from 'react'
import ClassCell from './ClassCell'
import DATA_PROGRAM from '../DataProgram'

const ALL_CLASSES = DATA_PROGRAM;

const ProgramGrid = () => {
    const classes = ALL_CLASSES;
    return (
        <div>
            {classes.map((classCell) => (
                <ClassCell key={Math.random().toString()}
                    classCode={classCell.classCode} 
                    classTitle={classCell.classTitle} 
                    classDescription={classCell.classDescription}
                    classState={classCell.classState}
                />
            ))}
        </div>
    );
}

export default ProgramGrid;