import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router";

export default function Table({ book }) {
  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col sm:flex-row gap-4">
        {/* Image */}
        <div className="w-full sm:w-32 flex justify-center sm:justify-start">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-28 h-40 object-cover rounded-lg shadow-sm border"
          />
        </div>

        {/* Divider on desktop */}
        <div className="hidden sm:block w-[1px] bg-gray-200"></div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 bg-green-50 p-4 rounded-lg border border-green-100">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              Book
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {book.genre || "General"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-900 truncate">
            {book.title}
          </h2>

          {/* Author */}
          <p className="text-sm text-gray-700 truncate">
            <span className="font-medium">Author:</span> {book.author}
          </p>

          {/* Rating */}
          <div className="mt-1">
            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit shadow-sm border border-green-200">
              <Star size={16} className="fill-green-600 text-green-600" />
              <span className="font-semibold">{book.rating}</span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-3">
            <Link
              to={`/book-details/${book._id}`}
              className="btn btn-success btn-sm text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
