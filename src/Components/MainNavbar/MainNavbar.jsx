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
    <div className="navbar bg-base-200">
      <div className="ps-4">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex grow justify-end px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-field">Button</a>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-field"
            >
              Dropdown
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
