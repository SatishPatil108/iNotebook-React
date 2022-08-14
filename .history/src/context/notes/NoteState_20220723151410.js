import React from "react";

import noteContext from "./noteContext";

const NoteContext = (props) => {
    return (
        <NoteContext.Provider>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteContext;