import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const NoteField = () => {

    const { user } = useAuth();
    const noteRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const note = noteRef.current.value;
        const data = { note, email: user.email };

        fetch('https://shielded-springs-23220.herokuapp.com/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Success',
                        'Your Note Has Been Added',
                        'success'
                    );
                    e.target.reset();

                }
            });

    };

    return (
        <div className="mt-20">

            <div className="container">

                <form onSubmit={handleSubmit} className="w-full lg:w-2/6 mx-auto flex flex-col gap-y-3">

                    <textarea ref={noteRef} className="p-3 focus:outline-none focus:ring-4 focus:ring-indigo-500 rounded-md transition duration-500 border-2 border-gray-300 w-full shadow-xl" rows="5" name="notes" placeholder="Add Note"></textarea>

                    <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-28 py-2 mx-auto rounded-full outline-none focus:ring-4 ring-indigo-300 ring-offset-1 transition duration-500 text-white" type="submit">Save</button>

                </form>

            </div>

        </div>
    );
};

export default NoteField;
