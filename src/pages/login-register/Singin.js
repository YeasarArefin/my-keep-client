import React, { useRef } from 'react';
import { FiLock } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Singin = () => {

    const { GoogleSingin, SinginWithEmailAndPassword } = useAuth();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        SinginWithEmailAndPassword(email, password, navigate);

    };

    return (
        <div>

            <div className="container">

                <div className="flex h-screen items-center">

                    <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-2/6 mx-auto gap-y-5 p-8 border rounded-xl shadow-xl" action="">

                        <div className="relative">
                            <HiOutlineMail className="absolute top-4 left-3 text-xl text-indigo-600" />
                            <input ref={emailRef} className="input w-full" type="email" placeholder="Email" required />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute top-4 left-3 text-xl text-indigo-600" />
                            <input ref={passwordRef} className="input w-full" type="password" placeholder="Password" required />
                        </div>

                        <button className="py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition duration-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-1" type="submit">Sing In</button>

                        <Link to="/singup">
                            <h1 className="hover:underline text-indigo-600 font-normal text-center">Need An Account ?</h1>
                        </Link>

                        <hr />

                        <h1 className="text-center text-gray-500">OR</h1>

                        <button onClick={() => GoogleSingin(navigate)} className="py-2 rounded-md border-gray-300 border-2 transition duration-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-offset-1 flex items-center justify-center hover:bg-gray-100" type="submit">
                            <div className="p-2"><FcGoogle className="text-2xl" /></div>Google Sing in</button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Singin;
