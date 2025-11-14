import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { Authcontext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

export default function EditBook() {
  const booksdata = useLoaderData();
  const { title, author, coverImage, rating, summury, userEmail, _id } =
    booksdata;
  const { user } = useContext(Authcontext);

  function handleEditBook(e) {
    e.preventDefault();
    const updatedBooksdata = {
      title: e.target.Title.value,
      author: e.target.Author.value,
      rating: e.target.Rating.value,
      summury: e.target.Summury.value,
      coverImage: e.target.CoverImage.value,
      userEmail: e.target.UserEmail.value,
    };
    fetch(`http://localhost:3000/update-book/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },

      body: JSON.stringify(updatedBooksdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updated successfully", data);
        toast.success("successfully updated");
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
          <form onSubmit={handleEditBook} className="fieldset">
            {/* title */}
            <label className="label">Title</label>
            <input
              defaultValue={title}
              name="Title"
              type="text"
              className="input"
            />
            {/* author */}
            <label className="label">Author</label>
            <input
              name="Author"
              defaultValue={author}
              type="text"
              className="input"
              placeholder="Author"
            />
            {/* Rating */}
            <label className="label">Rating</label>
            <input
              name="Rating"
              defaultValue={rating}
              type="text"
              className="input"
              placeholder="Rating"
            />
            {/* Summury */}
            <label className="label">Summury</label>
            <input
              name="Summury"
              defaultValue={summury}
              type="text"
              className="input"
              placeholder="Summury"
            />
            {/* Cover Image */}
            <label className="label">Cover Image</label>
            <input
              name="CoverImage"
              defaultValue={coverImage}
              type="text"
              className="input"
              placeholder="Cover Image"
            />
            {/* Email */}
            <label className="label">User Email</label>
            <input
              name="UserEmail"
              defaultValue={userEmail}
              type="text"
              className="input"
              placeholder="User Email"
            />

            <button className="btn btn-neutral mt-4">Update Books</button>
          </form>
        </div>
      </div>
    </div>
  );
}
