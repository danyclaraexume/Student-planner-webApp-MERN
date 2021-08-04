import React, {useState} from 'react'
import NoteList from '../../Components/NoteBook/NoteList';
import NoteEditor from '../../Components/NoteBook/NoteEditor';

const NoteBookTab = () => {

    const [notes, setNotes] = useState([
        {
            id: Math.random().toString(),
            title: "Untitled Note",
            body: "My First Note",
            lastModified: Date.now(),
        }
    ]);
    const [activeNote, setActiveNote] = useState(false);

    const addNoteHandler = () => {
        const newNote = {
            id: Math.random().toString(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
          };
        setNotes([newNote, ...notes]);
    }

    const deleteNoteHandler = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
      };
    
      const updateNoteHandler = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
      };
    
      const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
      };

    return(
        <div>
            <h3>NoteBook Tab Tabulation</h3>
            <NoteList 
                notes={notes} 
                onAddNote={addNoteHandler} 
                onDeleteNote={deleteNoteHandler}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <NoteEditor activeNote={getActiveNote()} onUpdateNote={updateNoteHandler} />
        </div>
    )};

export default NoteBookTab;