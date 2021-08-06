import React from 'react'
import './Grades.css'
import GradesGrid from './GradesGrid'

const Grades = () => {
    return (
        <div className="grades-wrapper">
            <div className="stats">
                <div className="gpaGraph">

                </div>
                <div className="topGrades">
                    <h3>Top Grades</h3>
                </div>
            </div>
            <div className="grades">
                <GradesGrid />
            </div>
        </div>
    );
}

export default Grades;