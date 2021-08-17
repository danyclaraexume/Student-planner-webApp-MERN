import React from 'react';
import './NoteBook.css'

const NoteEditor = (props) => {
    const onEditField = (field, value) => {
        props.onUpdateNote({
          ...props.activeNote,
          [field]: value,
          lastModified: Date.now(),
        });
      };

    if (!props.activeNote) return <div className="no-active-note"><h4>No Active Note</h4></div>;

    return (
        <div className="note-editor-wrapper">
            <div className="note-editor">
                <input type="text" id="noteTitle" placeholder="Note Title" value={props.activeNote.title} onChange={(e) => onEditField("title", e.target.value)} />
                <textarea 
                    id="noteBody"
                    placeholder="Write your note here..."  
                    value={props.activeNote.body}
                    onChange={(e) => onEditField("body", e.target.value)} 
                />
            </div>
            <div className="note-preview">
                <hr/>
                <h2>{props.activeNote.title}</h2>
                <p>{props.activeNote.body}</p>
            </div>
        </div>
    );
}

export default NoteEditor;