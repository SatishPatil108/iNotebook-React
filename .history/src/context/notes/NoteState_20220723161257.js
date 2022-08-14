import noteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name": "Satish",
        "class": "BE"
    }
    return (
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;