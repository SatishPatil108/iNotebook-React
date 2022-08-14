import React from 'react'

const Notes = () => {
    return (
        <div className="container">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return note.title
            })}
        </div>
    )
}

export default Notes
