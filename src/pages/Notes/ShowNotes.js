import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ShowNotes = () => {

    const { user } = useAuth();
    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/notes?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setNotes(data));

    }, [user?.email]);

    const handleDelete = (_id) => {

        fetch(`http://localhost:5000/notes/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted');
                    setNotes((preValu) => preValu.filter(val => val._id !== _id));
                }
            });
    };

    return (
        <div className="mt-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">

                {
                    notes?.map(note => <div key={note._id}>

                        <div className="note relative border hover:shadow-xl transition duration-500 rounded-lg h-60 overflow-scroll overflow-x-hidden pt-12 pb-5 px-5">

                            <div className="absolute flex gap-x-2 top-2 right-2">

                                <Link to={`/notes/update/${note?._id}`}>
                                    <button className="bg-green-600 hover:bg-green-700 transition duration-300 rounded-full p-2 text-white text-lg ">
                                        <FiEdit />
                                    </button>
                                </Link>

                                <button onClick={() => handleDelete(note?._id)} className="bg-red-600 hover:bg-red-700 transition duration-300 rounded-full p-2 text-white text-lg ">
                                    <AiOutlineDelete />
                                </button>

                            </div>

                            <p>{note?.note}</p>

                        </div>

                    </div>)
                }

            </div>

        </div>
    );
};



export default ShowNotes;;
