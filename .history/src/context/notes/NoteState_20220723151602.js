import React from "react";

import noteContext from "./noteContext";

const NoteContext = (props) => {
    const state = {
        "name": "Satish",
        "class": "BE"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContext;