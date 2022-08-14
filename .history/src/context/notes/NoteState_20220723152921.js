import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "Satish",
        "class": "BE"
    }
    return (
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;