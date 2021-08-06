import React from 'react'
import './ClassCell.css'

const ClassCell = (props) => {
    const handleCellColor = () => {
        if(props.classState === "Completed") return "#9ACD32";
        if(props.classState === "In Progress") return "#B0C4DE";
        if(props.classState === "Remaining") return "white";
    }

    return (
        <div className="classCell" style={{ backgroundColor:handleCellColor()}}>
            <p>{props.classCode}</p>
        </div>
    );
}

export default ClassCell;