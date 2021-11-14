import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ShowNotes = () => {

    const { user } = useAuth();
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/notes`)
            .then(res => res.json())
            .then(data => setNotes(data));

    }, []);

    const userNote = notes?.filter(note => note?.email == user?.email);
    console.log(userNote);
    return (
        <div className="mt-20">

            {
                userNote?.map(note => <h1>{note?.note}</h1>)
            }

        </div>
    );
};

export default ShowNotes;
