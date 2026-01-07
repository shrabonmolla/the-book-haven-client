import React from "react";
import { motion } from "framer-motion";

// Fake statistics data
const stats = [
  { id: 1, label: "Books Available", value: 1250, animation: "fade" },
  { id: 2, label: "Active Readers", value: 4300, animation: "slide" },
  { id: 3, label: "Daily Visitors", value: 980, animation: "scale" },
  { id: 4, label: "Authors Featured", value: 320, animation: "rotate" },
];

export default function Statistics() {
  return (
    <section className="bg-gradient-to-r from-purple-200 to-pink-200 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
        <p className="text-gray-700 mt-2">
          See the amazing growth of{" "}
          <span className="font-semibold">The Book Haven</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
            }}
          >
            <motion.div
              className="text-4xl font-bold text-primary mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {stat.value.toLocaleString()}
            </motion.div>
            <motion.p
              className="text-gray-700 text-center"
              initial={{
                opacity: 0,
                x: stat.animation === "slide" ? -50 : 0,
                rotate: stat.animation === "rotate" ? -45 : 0,
              }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {stat.label}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
