import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { Pencil, Trash2, User, Mail, Star } from "lucide-react";

export default function ViewDetails() {
  const bookdetail = useLoaderData();
  const { coverImage, title, author, userEmail, rating, summury, _id } =
    bookdetail;
  const navigate = useNavigate();

  //   handleDelete
  const handleDelete = () => {
    fetch(`http://localhost:3000/delete-book/${_id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delted one book ", data);
        navigate("/");
      });
  };

  return (
    <div className="w-11/12 mx-auto py-8">
      <div className="bg-white shadow-md border border-green-200 rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className=" p-4 flex justify-center items-center md:w-1/3">
          <img
            className="w-48 md:w-56 rounded-lg shadow-sm border "
            src={coverImage}
            alt={title}
          />
        </div>

        {/* Content Section */}
        <div className="card-body p-6 md:w-2/3 space-y-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            {title}
          </h2>

          {/* Book Info */}
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <User size={18} className="text-green-600" />
              <span className="font-medium">Author:</span> {author}
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} className="text-green-600" />
              <span className="font-medium">Uploaded By:</span> {userEmail}
            </p>

            <p className="flex items-center gap-2">
              <Star size={18} className="text-green-600" />
              <span className="font-medium">Rating:</span> {rating}
            </p>
          </div>

          {/* Summary */}
          <p className="text-gray-600 leading-relaxed">{summury}</p>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <Link
              to={`/update-book/${_id}`}
              className="btn btn-outline border-green-500 text-green-600 hover:bg-green-500 hover:text-white flex items-center gap-2"
            >
              <Pencil size={18} />
              Edit
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-outline border-red-500 text-red-600 hover:bg-red-500 hover:text-white flex items-center gap-2"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
