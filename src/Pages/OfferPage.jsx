import React from "react";
import { motion } from "framer-motion";

// Fake offers data
const offers = [
  {
    id: 1,
    title: "New Year Discount",
    description: "Get 20% off on all books!",
    image: "https://images.unsplash.com/photo-1556742400-b5b4a2d1c1b5",
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free",
    description: "Special offer on selected categories.",
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "For orders above ৳1000.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
  {
    id: 4,
    title: "Student Offer",
    description: "Extra 10% off for students.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 5,
    title: "Weekend Sale",
    description: "Up to 30% discount on all fiction books.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 6,
    title: "Author Special",
    description: "Selected author books 15% off.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function OfferPage() {
  return (
    <section className=" min-h-screen py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Special Offers</h2>
        <p className="text-gray-700 mt-2">
          Grab the best deals from{" "}
          <span className="font-semibold">The Book Haven</span>
        </p>
      </motion.div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
