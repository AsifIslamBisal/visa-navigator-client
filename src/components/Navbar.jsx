import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext); 
    const navigate = useNavigate(); 

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("User signed out successfully");
                navigate('/');
            })
            .catch(error => console.log('ERROR:', error.message));
    };

    const links = (
        <div className='font-bold flex flex-col lg:flex-row'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allvisa'>All visa</NavLink></li>
            {user && (
                <>
                    <li><NavLink to='/addvisa'>Add Visa</NavLink></li>
                    <li><NavLink to='/myaddedvisa'>My Added Visas</NavLink></li>
                    <li><NavLink to='/myvisaapplication'>My Visa Applications</NavLink></li>
                </>
            )}
        </div>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="lg:navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">VISA NAVIGATOR</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <span className=" mr-4">{user.email}</span>
                            <button onClick={handleSignOut} className="btn">Sign Out</button>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Avatar"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className="btn">Login</Link>
                            <Link to="/signup" className="btn ml-2">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
