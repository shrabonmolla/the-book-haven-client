import React from "react";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">About The Book Haven</h1>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">Explore Books</div>
        <div className="collapse-content text-sm">
          Browse a vast collection of books across genres, authors, and ratings.
          Find your next favorite read effortlessly.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Manage Your Collection
        </div>
        <div className="collapse-content text-sm">
          Add, update, and delete your books securely. Keep your personal
          library organized with just a few clicks.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Secure & Personalized
        </div>
        <div className="collapse-content text-sm">
          Enjoy a personalized experience with Firebase authentication, ensuring
          your book data is safe and accessible only to you.
        </div>
      </div>
    </div>
  );
}
