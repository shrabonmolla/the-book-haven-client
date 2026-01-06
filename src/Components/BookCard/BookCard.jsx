import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // make sure it's react-router-dom

const BookCard = ({ book }) => {
  const { title, author, price, discountPrice, coverImage, _id } = book;
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  const discount = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="relative bg-base-100 shadow-sm font-sans cursor-pointer rounded-lg overflow-hidden"
      initial="rest"
      animate={isMobile && open ? "hover" : "rest"}
      whileHover={!isMobile ? "hover" : undefined}
      onClick={isMobile ? () => setOpen(!open) : undefined}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={coverImage}
          alt={title}
          className="mx-auto w-32 h-48 object-cover"
        />

        {discountPrice && (
          <div className="absolute top-0 left-0 bg-error text-white text-xs font-semibold px-2 py-1 rounded-br-md">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-2 space-y-1">
        <h3 className="text-sm font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-xs text-gray-600 truncate">{author}</p>

        <div className="flex items-center gap-1 pt-1">
          {discountPrice ? (
            <>
              <span className="text-error font-bold text-sm">
                ৳ {discountPrice}
              </span>
              <span className="text-gray-400 line-through text-xs">
                ৳ {price}
              </span>
            </>
          ) : (
            <span className="text-error font-bold text-sm">৳ {price}</span>
          )}
        </div>
      </div>

      {/* Slide-up Button */}
      <motion.div
        variants={{
          rest: { y: "100%", opacity: 0 },
          hover: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full px-2 pb-2"
      >
        {/* Fix: make button full-width, no rounded, no extra opacity */}
        <Link
          to={`/book-details/${_id}`}
          className="btn btn-primary w-full rounded-none"
        >
          View Details
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BookCard;
