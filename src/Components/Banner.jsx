import React from "react";
import book from "../assets/lottie.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

export default function Banner() {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={book} />
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 via-green-300 to-pink-500 bg-clip-text text-transparent">
              The Book Haven: Your Digital Library
            </h1>
            <p className="py-6 text-green-600">
              Discover a world of books, add your favorites, update details, and
              manage your personal collection securely. Enjoy seamless access
              and control with Firebase authentication and a powerful full-stack
              experience.
            </p>
            <div className="flex gap-4">
              <Link to="/allbooks" className="btn btn-outline btn-pirmary">
                All Books
              </Link>
              <Link to="/addbooks" className="btn btn-outline btn-success">
                Create Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
