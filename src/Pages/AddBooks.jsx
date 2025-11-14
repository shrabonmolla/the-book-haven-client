import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

export default function AddBooks() {
  function handleAddbooks(e) {
    e.preventDefault();
    const booksdata = {
      title: e.target.Title.value,
      author: e.target.Author.value,
      rating: e.target.Rating.value,
      summury: e.target.Summury.value,
      coverImage: e.target.CoverImage.value,
      userEmail: e.target.UserEmail.value,
    };
    console.log(booksdata);
    fetch(" http://localhost:3000/add-books", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booksdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("added one books", data);
        e.target.reset();
        toast.success("one book added ");
      });
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center">
        <div className="font-bold text-2xl">Add you books</div>
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          {/* form */}
          <form onSubmit={handleAddbooks} className="fieldset">
            {/* title */}
            <label className="label">Title</label>
            <input
              name="Title"
              type="text"
              className="input"
              placeholder="Title"
            />
            {/* author */}
            <label className="label">Author</label>
            <input
              name="Author"
              type="text"
              className="input"
              placeholder="Author"
            />
            {/* Rating */}
            <label className="label">Rating</label>
            <input
              name="Rating"
              type="text"
              className="input"
              placeholder="Rating"
            />
            {/* Summury */}
            <label className="label">Summury</label>
            <input
              name="Summury"
              type="text"
              className="input"
              placeholder="Summury"
            />
            {/* Cover Image */}
            <label className="label">Cover Image</label>
            <input
              name="CoverImage"
              type="text"
              className="input"
              placeholder="Cover Image"
            />
            {/* Email */}
            <label className="label">User Email</label>
            <input
              name="UserEmail"
              type="text"
              className="input"
              placeholder="User Email"
            />

            <button className="btn btn-neutral mt-4">Add Books</button>
          </form>
        </div>
      </div>
    </div>
  );
}
