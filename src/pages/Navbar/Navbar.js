// import React, { useState } from 'react';
// import { HiMenuAlt3 } from 'react-icons/hi';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import logo from '../../assets/notes.png';

// const Navbar = () => {
// const { user, SingOut } = useAuth();
//     const [mobileNav, setMobileNav] = useState(false);
//     const menu = [
//         { id: 1, text: 'Notes', to: '/notes' },
//         { id: 2, text: 'Add Note', to: '/addnote' }
//     ];

//     //handle click 
//     const handleClick = () => {
//         setMobileNav(!mobileNav);
//     };
//     return (
//         <header className="border-b fixed w-full top-0 bg-green-600 z-50">
//             <div className="container">
//                 {/* desktop nav  */}
//                 <nav className="flex items-center px-12 text-white border-gray-300 py-3 bg-green-600">
//                     {/* brand  */}

//                     <div className="flex items-center space-x-2 flex-grow">

//                         <Link to="/">

//                             <div className="text-xl flex items-center gap-x-3 font-semibold  select-none">

//                                 <img width="30px" src={logo} alt="brand-logo" />
//                                 <h1>My Keep</h1>

//                             </div>

//                         </Link>

//                     </div>

//                     {/* menu s */}

//                     <div className="hidden md:flex lg:flex space-x-10">
//                         <ul className="flex items-center space-x-4">
//                             {menu.map(item => (
//                                 <li key={item.id}>
//                                     <NavLink to={item.to} className={(navinfo) => navinfo.isActive ? "border-b-2 border-white font-semibold" : ""}>{item.text}</NavLink>
//                                 </li>
//                             ))}
//                         </ul>

//                         {user?.email ? (

//                             <div className="flex items-center gap-x-3">

//                                 <div>
//                                     <img width="40px" className="rounded-full" src={user?.photoURL ? user?.photoURL : "https://image.flaticon.com/icons/png/512/206/206853.png"} alt="user" />
//                                 </div>
//                                 <h1>{user.displayName}</h1>
//                                 <button onClick={SingOut} className="bg-white px-3 py-2 text-green-600 focus:ring-4 transition duration-300 rounded-lg">Sign Out</button>
//                             </div>

//                         ) : (

//                             <Link to="/singup">
//                                 <button className="bg-white px-3 py-2 text-green-600 focus:ring-4 transition duration-300 rounded-lg">Signup</button>
//                             </Link>

//                         )}

//                     </div>

//                     {/* menu icon  */}
//                     <div className="block md:hidden lg:hidden">
//                         <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-white border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
//                     </div>
//                 </nav>

//                 {/* mobile nav  */}
//                 {
//                     mobileNav && (

//                         <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
//                             <ul>
//                                 {menu.map(item => (
//                                     <Link key={item.id} to={item.to} className="text-gray-600 text-lg">
//                                         <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
//                                             {item.text}
//                                         </li>
//                                     </Link>
//                                 ))}
//                             </ul>

//                             {/* button  */}
//                             <div className="px-3 py-2">
//                                 <Link to="/singup">
//                                     <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700 w-full">Signup</button>
//                                 </Link>
//                             </div>
//                         </nav>

//                     )
//                 }
//             </div>
//         </header>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import useAuth from '../../hooks/useAuth';
import Fade from 'react-reveal/Fade';

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const items = [
        { name: 'Notes', to: '/notes' },
        { name: 'Add Note', to: '/addnote' },
    ];

    const { user, SingOut } = useAuth();

    return (
        <header className="z-50 shadow-lg fixed w-full top-0 py-2">

            <div className="container lg:pb-0 text-lg font-semibold text-gray-800">

                <div className="flex gap-x-4 justify-between items-center">

                    <Link to="/">

                        <div className="flex items-center gap-x-2">

                            <img width="60px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-Z08B6X5w871joq7xnAWmfdBXMsicdcNoLtJNXWdsCDmjLVlfceacZRjVrdNwUb3FYw&usqp=CAU' alt="brand" />
                            <h1 className="text-2xl font-bold">My Keep</h1>

                        </div>

                    </Link>

                    <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 border-2 border-green-500 focus:ring-4 ring-offset-1 ring-green-200 transition duration-500 rounded-lg">

                        {
                            mobileMenu ? <VscChromeClose className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />
                        }

                    </button>


                    <div className="hidden lg:flex items-center gap-x-5">

                        <nav className="flex items-center gap-x-5">

                            {
                                items?.map((item, index) => <NavLink className={(info) => info.isActive ? "text-green-600 font-bold border-b-2 border-green-600" : ""} key={index} to={item?.to}>

                                    <h1>{item?.name}</h1>

                                </NavLink>)
                            }

                        </nav>

                        <div>

                            {
                                user?.email ? (

                                    <div className="flex items-center gap-x-3">
                                        <img width="50px" className='rounded-full' src={user?.photoURL} alt="user" />
                                        <h1>{user?.displayName}</h1>
                                        <button onClick={SingOut} className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Out</button>
                                    </div>

                                ) : (

                                    <div className="flex gap-x-2">

                                        <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign In</button>

                                    </div>

                                )
                            }

                        </div>

                    </div>

                </div>

                {

                    mobileMenu && <Fade left>

                        <div className='bg-white'>

                            <div className="lg:hidden flex flex-col">

                                {
                                    items?.map((item, index) => <NavLink className={(info) => info.isActive ? "text-green-600 font-bold border-b-2 border-green-600" : ""} key={index} to={item?.to}>

                                        <h1 className="px-2 py-2">{item?.name}</h1>

                                    </NavLink>)
                                }

                                <div>

                                    {
                                        user?.email ? (

                                            <div className="flex flex-wrap gap-y-4 items-center gap-x-3 mb-5">

                                                <img width="50px" className='rounded-full' src={user?.photoURL} alt="user" />
                                                <h1>{user?.displayName}</h1>
                                                <button onClick={SingOut} className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500">Sign Out</button>

                                            </div>

                                        ) : (

                                            <div className="flex gap-x-2">

                                                <button className="font-semibold px-6 py-2 rounded-full border-2 border-green-600 hover:bg-green-700 hover:text-white focus:ring-4 ring-green-200 ring-offset-1 transition duration-500 mt-3 mb-5">Sign In</button>

                                            </div>

                                        )
                                    }

                                </div>

                            </div>

                        </div>

                    </Fade>

                }

            </div>

        </header>
    );
};

export default Navbar;;