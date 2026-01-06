import React from "react";
import { useLoaderData } from "react-router";

// const bookData = {
//   title: "Introduction to Calculus",
//   author: "James Stewart",
//   description:
//     "A complete beginner-friendly calculus book for university students.",
//   price: 650,
//   discountPrice: 550,
//   category: "Mathematics",
//   publisher: "Cengage Learning",
//   language: "English",
//   pages: 1200,
//   stock: 20,
//   rating: 4.6,
//   coverImage: "https://images.unsplash.com/photo-1509228468518-180dd48a5791",
// };

const ViewDetails = () => {
  const bookData = useLoaderData();
  console.log(bookData);

  const discount = bookData.discountPrice
    ? Math.round(
        ((bookData.price - bookData.discountPrice) / bookData.price) * 100
      )
    : 0;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Cover Image */}
        <div className="flex-shrink-0">
          <img
            src={bookData.coverImage}
            alt={bookData.title}
            className="w-48 h-64 object-cover rounded-lg"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">{bookData.title}</h1>
          <p className="text-sm text-gray-600">by {bookData.author}</p>

          {/* Rating */}
          <p className="text-yellow-500 font-semibold">
            ⭐ {bookData.rating} / 5
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            {bookData.discountPrice ? (
              <>
                <span className="text-error font-bold text-xl">
                  ৳ {bookData.discountPrice}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ৳ {bookData.price}
                </span>
                <span className="bg-error text-white text-xs px-2 py-1 rounded">
                  -{discount}%
                </span>
              </>
            ) : (
              <span className="text-error font-bold text-xl">
                ৳ {bookData.price}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700">{bookData.description}</p>

          {/* Additional Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-600">
            <div>
              <span className="font-semibold">Category: </span>
              {bookData.category}
            </div>
            <div>
              <span className="font-semibold">Publisher: </span>
              {bookData.publisher}
            </div>
            <div>
              <span className="font-semibold">Language: </span>
              {bookData.language}
            </div>
            <div>
              <span className="font-semibold">Pages: </span>
              {bookData.pages}
            </div>
            <div>
              <span className="font-semibold">Stock: </span>
              {bookData.stock}
            </div>
          </div>

          {/* Buy Button */}
          <button className="btn btn-primary mt-4 w-full md:w-48">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
