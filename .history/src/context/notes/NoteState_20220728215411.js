import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // Get All Notes
    const getNotes = async () => {
        // API  Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g",
            },
        });

        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json);

        const note = {
            "_id": "62da4a93624101fbcba2f70b",
            "user": "62da3547e5c581994402a424",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-07-22T06:58:27.100Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g"
            }
        });
        const json = await response.json();
        console.log(json);

        console.log("Deleting a note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //  Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API  Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        console.log(json);

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

export default NoteState;