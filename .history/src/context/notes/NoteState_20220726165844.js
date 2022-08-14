import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
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
    const addNote = (title, description, tag) => {
        // TODO: API Call
        note = {
            "_id": "62da89d60b07163cf4d1b5c32",
            "user": "62da3547e5c581994402a424",
            "title": "My title Added",
            "description": "Please wake up early [ADDED]",
            "tag": "Personal",
            "date": "2022-07-22T11:28:22.313Z",
            "__v": 0
        };
        setNotes(notes.push(note));
    }
    // Delete a Note
    const deleteNote = (id) => {

    }
    //  Edit a Note
    const editNote = () => {

    }



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;