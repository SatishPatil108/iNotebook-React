import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    const host = "http://localhost:5000/api/notes/addnote";
    const notesInitial = [
        {
            "_id": "62da4a9m3624101fbcba2f70b",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T06:58:27.100Z",
            "__v": 0
        },
        {
            "_id": "62da4a9362b4101fbcba2f70d",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T06:58:27.254Z",
            "__v": 0
        },
        {
            "_id": "62da4b55g247e3f71d9903681",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T07:01:41.403Z",
            "__v": 0
        },
        {
            "_id": "62da89d600716s3cf4d1b5c32",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T11:28:22.313Z",
            "__v": 0
        },
        {
            "_id": "62da4a936241s01fbcba2f70b",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T06:58:27.100Z",
            "__v": 0
        },
        {
            "_id": "62da4a936241q01fbcba2f70d",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T06:58:27.254Z",
            "__v": 0
        },
        {
            "_id": "62da4b55247e3lf71d9903681",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T07:01:41.403Z",
            "__v": 0
        },
        {
            "_id": "62da89d60b07163cf4d1b5c32",
            "user": "62da3547e5c581994402a424",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "Personal",
            "date": "2022-07-22T11:28:22.313Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = async (title, description, tag) => {
        // TODO: API Call
        const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g"
            },
            body: JSON.stringify(data)
        });
        const json = response.json();

        console.log("Adding a new Note");
        const note = {
            "_id": "62da89d60b07163cf4d1b5c32",
            "user": "62da3547e5c581994402a424",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-07-22T11:28:22.313Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = (id) => {
        // TODO: API Call

        console.log("Deleting a note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }
    //  Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API  Call
        const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkYTM1NDdlNWM1ODE5OTQ0MDJhNDI0In0sImlhdCI6MTY1ODQ3MDg1Nn0.W1eGNrZ7Yg9gfobUoEM5HJCjRkO2B-m3WV_j7U6Bc_g"
            },
            body: JSON.stringify(data)
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
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;