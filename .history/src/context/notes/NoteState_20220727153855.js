import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNotes = async () => {
        // API  Call
        const response = await fetch(`${host}/api/notes/fetchallnotes}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g",
            },
        });

        const json = await response.json();
        console.log(json);
        // setNotes();
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g",
            },
            body: JSON.stringify({ title, description, tag })
        });
    }

    // Delete a Note
    const deleteNote = (id) => {
        // API Call
        console.log("Deleting a note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //  Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API  Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();


        // Logic to edit in Client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState