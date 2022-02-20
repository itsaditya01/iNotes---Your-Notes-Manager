import React, { useContext, useEffect } from 'react'
import noteContext from '../../Context/noteContext'
import Navbar from '../Navbar/Navbar.component'
import Notebook from '../Notebook/Notebook.component'

function Home() {
    const context = useContext(noteContext);
    const { getUser } = context;
    useEffect(() => {
        getUser().then(() => {
        });
    }, [])
    return (
        <div>
            <Navbar />
            <Notebook />
        </div>
    )
}

export default Home