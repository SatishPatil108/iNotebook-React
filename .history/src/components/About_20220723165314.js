import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react';
const About = () => {
    const a = useContext(noteContext);
    useEffect(() => {
        return () => {
            a.update();
            // eslint-disable-next-line
        };
    }, []);

    return (
        <div>
            This is About {a.state.name} and he did Graduate with {a.state.class};
        </div>
    )
}

export default About
