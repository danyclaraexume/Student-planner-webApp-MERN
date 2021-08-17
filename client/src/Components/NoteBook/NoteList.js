import React from 'react';
import './NoteBook.css'

const NoteList = (props) => {
    return (
        <div className="sidebar">
            <div className="notesHeader">
                <h2>Notes</h2>
                <button onClick={props.onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
        
          <div className="noteList">
            {props.notes.map((note) => (
                <div key={note.id} className="noteItem" onClick={() => props.setActiveNote(note.id)}>
                    <strong>{note.title}</strong>
                    <button onClick={(e) => props.onDeleteNote(note.id)}>Delete</button>
                    <p>{note.body && note.body.substr(0, 25) + "..."}</p>
                    <small> 
                        Last Modified{" "}
                        {new Date(note.lastModified).toLocaleDateString("en-GB", 
                            {
                                hour: "2-digit",
                                minute: "2-digit",
                            }
                        )}
                    </small>
                </div>
            ))}  
           
          </div>
      </div>
        </div>
    );
}

export default NoteList;