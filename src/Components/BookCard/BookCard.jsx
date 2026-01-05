import React from "react";

const BookCard = ({ book }) => {
  const { title, author, price, discountPrice, coverImage } = book;
  const discount = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className=" bg-white   shadow-sm overflow-hidden font-sans">
      {/* Image Section */}
      <div className="relative">
        <img
          src={coverImage}
          alt={title}
          className="mx-auto w-32 h-48 object-cover  "
        />
        {discountPrice && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-2 space-y-1">
        <h3 className="text-sm font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-xs text-gray-600 truncate">{author}</p>

        {/* Price */}
        <div className="flex items-center gap-1 pt-1">
          {discountPrice ? (
            <>
              <span className="text-red-600 font-bold text-sm">
                ৳ {discountPrice}
              </span>
              <span className="text-gray-400 line-through text-xs">{`৳ ${price}`}</span>
            </>
          ) : (
            <span className="text-red-600 font-bold text-sm">৳ {price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
