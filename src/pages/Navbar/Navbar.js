import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../assets/notes.png';

const Navbar = () => {
    const { user, SingOut } = useAuth();
    const [mobileNav, setMobileNav] = useState(false);
    const menu = [
        { id: 1, text: 'Notes', to: '/' },
        { id: 2, text: 'Sing in', to: '/singin' },
        { id: 3, text: 'Sing Up', to: '/singup' },
    ];

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav);
    };
    return (
        <header className="border-b fixed w-full top-0 bg-indigo-600 z-50">
            <div className="container">
                {/* desktop nav  */}
                <nav className="flex items-center px-12 text-white border-gray-300 py-3 bg-indigo-600">
                    {/* brand  */}

                    <div className="flex items-center space-x-2 flex-grow">

                        <Link to="/">

                            <div className="text-xl flex items-center gap-x-3 font-semibold  select-none">

                                <img width="30px" src={logo} alt="brand-logo" />
                                <h1>My Keep</h1>

                            </div>

                        </Link>

                    </div>

                    {/* menu s */}

                    <div className="hidden md:flex lg:flex space-x-10">
                        <ul className="flex items-center space-x-4">
                            {menu.map(item => (
                                <li key={item.id}>
                                    <NavLink to={item.to} className={(info) => info.isActive ? 'border-b-2' : 'text-white'}>{item.text}</NavLink>
                                </li>
                            ))}
                        </ul>

                        {user?.email ? (

                            <div className="flex items-center gap-x-3">

                                <div>
                                    <img width="40px" className="rounded-full" src={user?.photoURL ? user?.photoURL : "https://image.flaticon.com/icons/png/512/206/206853.png"} alt="user" />
                                </div>
                                <h1>{user.displayName}</h1>
                                <button onClick={SingOut} className="bg-white px-3 py-2 text-indigo-600 focus:ring-4 transition duration-300 rounded-lg">Sign Out</button>
                            </div>

                        ) : (

                            <Link to="/singup">
                                <button className="bg-white px-3 py-2 text-indigo-600 focus:ring-4 transition duration-300 rounded-lg">Signup</button>
                            </Link>

                        )}

                    </div>

                    {/* menu icon  */}
                    <div className="block md:hidden lg:hidden">
                        <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-white border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                    </div>
                </nav>

                {/* mobile nav  */}
                {
                    mobileNav && (

                        <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                            <ul>
                                {menu.map(item => (
                                    <Link key={item.id} to={item.to} className="text-gray-600 text-lg">
                                        <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                                            {item.text}
                                        </li>
                                    </Link>
                                ))}
                            </ul>

                            {/* button  */}
                            <div className="px-3 py-2">
                                <Link to="/singup">
                                    <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700 w-full">Signup</button>
                                </Link>
                            </div>
                        </nav>

                    )
                }
            </div>
        </header>
    );
};

export default Navbar;