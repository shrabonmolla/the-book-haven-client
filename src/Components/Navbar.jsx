import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { LogInIcon } from "lucide-react";
import { Authcontext } from "../Provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(Authcontext);
  const lnikList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allbooks">All Books</NavLink>
      </li>
      <li>
        <NavLink to="/addbooks">Add Books</NavLink>
      </li>
      <li>
        <NavLink to="/mybooks">My Books</NavLink>
      </li>
    </>
  );
  // logout the user
  function handleLogOut() {
    logOut();
  }
  return (
    <div>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {lnikList}
            </ul>
          </div>
          <Link
            to="/"
            className="flex justify-center items-center gap-4 text-xl"
          >
            <img className="w-8" src={logo} alt="logo" />
            <div className="leading-none text-start font-bold">
              The <br />
              Book <br />
              Haven
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex border gap-3 border-gray-300 rounded-4xl p-1 shadow">
          <ul className="menu menu-horizontal px-1">{lnikList} </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <div className="tooltip" data-tip={user.displayName}>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
              <Link onClick={handleLogOut} className="underline">
                Log Out
              </Link>
            </>
          ) : (
            <Link to="/login" className="underline">
              Login
            </Link>
          )}
          <Link to="/register" className="btn rounded-4xl border-none">
            Register <LogInIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
