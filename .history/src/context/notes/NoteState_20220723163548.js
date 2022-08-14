import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "Satish",
        "class": "BE"
    }
    return (
        <NoteContext.Provider >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;