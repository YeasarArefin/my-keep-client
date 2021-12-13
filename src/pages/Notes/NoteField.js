import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const NoteField = () => {

    const { user } = useAuth();
    const noteRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const note = noteRef.current.value;
        const dateAndTime = new Date();
        const time = dateAndTime.toLocaleTimeString();
        const date = dateAndTime.toDateString();
        const data = { note, email: user.email, time, date };

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

                <div>
                    <h1 className="mt-32 text-center mb-3 text-3xl font-bold">Write Your Note</h1>
                    <div className="h-1 w-20 bg-green-600 mx-auto mb-10"></div>
                </div>

                <form onSubmit={handleSubmit} className="w-full lg:w-4/5 mx-auto flex flex-col gap-y-10">

                    <textarea ref={noteRef} className="p-3 focus:outline-none focus:ring-4 focus:ring-green-500 rounded-md transition duration-500 border-2 border-gray-300 w-full md:w-4/5 mx-auto shadow-xl" rows="5" name="notes" placeholder="Add Note" name="note" cols="30" rows="10"></textarea>

                    <button className="bg-gradient-to-r from-green-500 to-green-700 w-28 py-2 mx-auto rounded-full outline-none focus:ring-4 ring-green-300 ring-offset-1 transition duration-500 text-white" type="submit">Save</button>

                </form>

            </div>

        </div>
    );
};

export default NoteField;
