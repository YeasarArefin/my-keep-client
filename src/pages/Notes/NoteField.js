import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';

const NoteField = () => {

    const { user } = useAuth();
    const noteRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const note = noteRef.current.value;
        const data = { note, email: user.email };

        fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json());

        e.target.reset();
    };

    return (
        <div className="mt-20">

            <form onSubmit={handleSubmit} className="w-2/6 mx-auto flex flex-col gap-y-3">

                <textarea ref={noteRef} className="p-3 focus:outline-none focus:ring-4 focus:ring-indigo-500 rounded-md transition duration-500 border-2 border-gray-300 w-full shadow-xl" rows="5" name="notes" placeholder="Add Note"></textarea>

                <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-28 py-2 mx-auto rounded-full outline-none focus:ring-4 ring-indigo-300 ring-offset-1 transition duration-500 text-white" type="submit">Save</button>

            </form>

        </div>
    );
};

export default NoteField;
