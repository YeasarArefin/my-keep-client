import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FcCalendar, FcClock } from 'react-icons/fc';
import Swal from 'sweetalert2';

const ShowNotes = () => {

    const { user } = useAuth();
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetch(`https://shielded-springs-23220.herokuapp.com/notes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setNotes(data));

    }, [user?.email]);

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://shielded-springs-23220.herokuapp.com/notes/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                            setNotes((preValu) => preValu.filter(val => val._id !== _id));
                        }

                    });

            }

        });

    };

    return (
        <div className="mt-28">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">

                {
                    notes?.map(note => <div key={note._id}>

                        <div className="note relative border border-gray-200 hover:shadow-2xl transition duration-500 rounded-lg h-72 overflow-scroll overflow-x-hidden pt-14 pb-5 px-5">

                            <div className="absolute w-full flex items-center justify-between top-2 right-2">

                                <div className="text-xs pl-5 ">

                                    <div className="flex gap-x-2 md:gap-x-4 border border-green-600 px-3 py-1 rounded-full shadow-sm">

                                        <div className="flex items-center gap-x-1">
                                            <FcCalendar className="text-sm" />
                                            <h1>{note?.date}</h1>
                                        </div>

                                        <div className="flex items-center gap-x-1">
                                            <FcClock className="text-sm" />
                                            <h1>{note?.time}</h1>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex gap-x-2 md:gap-x-4">

                                    <Link to={`/notes/update/${note?._id}`}>
                                        <button className="bg-green-600 hover:bg-green-700 transition duration-300 rounded-full p-2 text-white text-lg ">
                                            <FiEdit />
                                        </button>
                                    </Link>

                                    <button onClick={() => handleDelete(note?._id)} className="bg-red-600 hover:bg-red-700 transition duration-300 rounded-full p-2 text-white text-lg ">
                                        <AiOutlineDelete />
                                    </button>

                                </div>

                            </div>

                            <p className="font-semibold">{note?.note}</p>

                        </div>

                    </div>)
                }

            </div>

        </div>
    );
};



export default ShowNotes;;
