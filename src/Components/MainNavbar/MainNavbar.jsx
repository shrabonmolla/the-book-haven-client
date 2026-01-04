import { ChevronDown } from "lucide-react";
import React from "react";

export default function MainNavbar() {
  const links = (
    <>
      <li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="flex gap-1">
            <span>লেখক</span> <ChevronDown className="w-4" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="flex gap-1">
            <span>বিষয়</span> <ChevronDown className="w-4" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="flex gap-1">
            <span>প্রকাশনী </span> <ChevronDown className="w-4" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a> ইসলামি বই</a>
      </li>
      <li>
        <a>ইংরেজি ভাষার বই</a>
      </li>
      <li>
        <a>অফার</a>
      </li>
      <li>
        <a>যোগাযোগ করুন</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
