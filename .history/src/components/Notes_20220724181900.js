import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    // eslint-disable-next-line
    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <Noteitem note={note} />
            })}
        </div>
    )
}

export default Notes
