import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  return (
    <div className="">
      <div className="navbar bg-slate-800 text-slate-400">
        <div className="navbar-start lg:ml-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/favorite'>
                  Favorite
                </Link>
              </li>
              <li>
                <Link to='/blogs'>Blog</Link>
              </li>
            </ul>
          </div>
          <img className="lg:w-16 w-10 rounded-lg" src="assets/logo.jpg" alt="" />
          <Link to='/' className="btn btn-ghost normal-case lg:block hidden lg:text-2xl">The Butcher's Hub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="hover:bg-pink-300 hover:rounded-md">
              <NavLink to='/favorite'>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
                Favorite
                </NavLink>
            </li>
            <li>
              <NavLink to='/blogs'>Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:mr-12">
          {
          user  ? 
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
              data-tip={user?.displayName || user?.email}
            >
              <div className="lg:w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a className="justify-between">
                  Profile Settings
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
          :
          <Link className="font-semibold btn bg-slate-900 border-0" to='/login'>Login</Link>
        }


        </div>
      </div>
    </div>
  );
};

export default Navbar;
