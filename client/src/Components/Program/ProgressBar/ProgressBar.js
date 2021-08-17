import React from 'react'
import './ProgressBar.css'
import DATA_PROGRAM from '../DataProgram';

const ALL_CLASSES = DATA_PROGRAM;

const ProgressBar = () => {
    const classes = ALL_CLASSES;
    let barSize = classes.length;
    let completed = classes.filter(cellClass => cellClass.classState === "Completed").length;
    let inProgress = classes.filter(cellClass => cellClass.classState === "In Progress").length;
    let remaining = classes.filter(cellClass => cellClass.classState === "Remaining").length;

    return (
        <div className="progressBar-wrapper">
            <div className="progressBar-full">
                <div className="progressBar-part" style={{ backgroundColor: "#9ACD32", float:"left", width:`${completed * 100 / barSize}%`}}> {completed} </div>
                <div className="progressBar-part" style={{ backgroundColor:"#B0C4DE", float:"left", width:`${inProgress * 100 / barSize}%`}}>{inProgress}</div>
                <div className="progressBar-part" style={{ backgroundColor:"white", float:"left", width:`${remaining * 100 / barSize}%`}}>{remaining}</div>
            </div>
            <div className="progressBar-legend">
                <p class="legend"><span class="colorBox" style={{ backgroundColor: "#9ACD32"}}></span> Completed Credits: {completed}</p>
                <p class="legend"><span class="colorBox" style={{ backgroundColor: "#B0C4DE"}}></span> In progress Credits: {inProgress}</p>
                <p class="legend"><span class="colorBox" style={{ backgroundColor: "white"}}></span> Remaining Credits: {remaining}</p>
            </div>
        </div>
    );
}

export default ProgressBar;