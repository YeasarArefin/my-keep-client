import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Alert from '@mui/material/Alert';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const UpdateNote = () => {

    const [note, setNote] = useState({});
    const { _id } = useParams();
    const [updatedNote, setUpdatedNote] = useState('');
    const Navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState();

    useEffect(() => {

        fetch(`https://shielded-springs-23220.herokuapp.com/notes/${_id}`)
            .then(res => res.json())
            .then(data => {
                setNote(data);
                setBtnDisabled(true);
            });

    }, [_id]);

    const handleUpdatedNote = (e) => {
        setUpdatedNote(e.target.value);
        setBtnDisabled(false);
    };

    const handleUpdate = (_id) => {

        if (updatedNote !== '') {

            fetch(`https://shielded-springs-23220.herokuapp.com/notes/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updatedNote })
            })
                .then(res => res.json())
                .then(data => {

                    if (data.modifiedCount > 0) {

                        // Navigate('/');
                        setShowAlert(true);
                        setBtnDisabled(true);
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 10000);

                        Swal.fire(
                            'Success!',
                            'Your Note Has Been Updated!',
                            'success'
                        );
                    }

                });

        } else {

            Swal.fire(
                'Not Updated',
                'Please Update Your Note',
                'error'
            );
        }


    };

    return (
        <div>

            <div className="container">

                <div>
                    <h1 className="mt-20 text-center mb-3 text-3xl font-bold">Change & Update Your Note</h1>
                    <div className="h-1 w-32 bg-indigo-600 mx-auto mb-10"></div>
                </div>

                <div>

                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-y-10">

                        <textarea onChange={handleUpdatedNote} defaultValue={note?.note} className="p-3 focus:outline-none focus:ring-4 focus:ring-indigo-500 rounded-md transition duration-500 border-2 border-gray-300 w-full md:w-4/5 mx-auto shadow-xl" rows="5" name="notes" placeholder="Add Note" name="note" cols="30" rows="10"></textarea>



                        {
                            btnDisabled ? (

                                <div className="flex items-center w-60 lg:w-2/12 mx-auto">

                                    <button className="border rounded-full py-2 w-28 mx-auto text-center justify-center gap-x-1 flex items-center border-indigo-600 hover:bg-indigo-500" type="submit"><MdKeyboardArrowLeft className="text-xl" />Back</button>

                                    <button className="bg-indigo-500 w-28 mx-auto py-2 rounded-full text-white opacity-50">
                                        Submit
                                    </button>

                                </div>

                            ) : (

                                <div className="flex items-center w-60 mx-auto">

                                    <button onClick={() => handleUpdate(note?._id)} className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-28 py-2 mx-auto rounded-full outline-none focus:ring-4 ring-indigo-300 ring-offset-1 transition duration-500 text-white" type="submit">Update</button>

                                    <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 w-28 py-2 mx-auto rounded-full outline-none focus:ring-4 ring-indigo-300 ring-offset-1 transition duration-500 text-white" type="submit">Update</button>

                                </div>

                            )
                        }

                    </form>

                </div>

            </div>

            <div className="mx-auto mt-10 absolute bottom-10 left-10">

                {
                    showAlert ? (

                        <Alert onClose={() => { setShowAlert(false); }}>This is a success alert — check it out!</Alert>

                    ) : ''

                }

            </div>

        </div >
    );
};

export default UpdateNote;
