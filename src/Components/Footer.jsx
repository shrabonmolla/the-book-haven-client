import React from "react";
import { Link } from "react-router";

export default function Footer(props) {
  const categories = props.categories || [];
  const publishers = props.publishers || [];

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 mt-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">The Book Haven</h2>
          <p className="text-gray-400">
            Your ultimate destination for books! Explore, learn, and enjoy the
            world of reading.
          </p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Menu</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/allbooks"
                className="hover:text-primary transition-colors"
              >
                সব বই
              </Link>
            </li>
            <li>
              <Link
                to="/english-book"
                className="hover:text-primary transition-colors"
              >
                ইংরেজি ভাষার বই
              </Link>
            </li>
            <li>
              <Link
                to="/offers"
                className="hover:text-primary transition-colors"
              >
                অফার
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                যোগাযোগ করুন
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="flex flex-col gap-2">
            {categories.map(function (cat) {
              return (
                <li key={cat}>
                  <Link
                    to={`/books/category/${cat}`}
                    className="hover:text-primary transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Publishers */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Publishers</h3>
          <ul className="flex flex-col gap-2">
            {publishers.map(function (pub) {
              return (
                <li key={pub}>
                  <Link
                    to={`/books/publisher/${pub}`}
                    className="hover:text-primary transition-colors"
                  >
                    {pub}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-12 text-sm">
        &copy; {new Date().getFullYear()} The Book Haven. All rights reserved.
      </div>
    </footer>
  );
}
