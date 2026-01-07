import React from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function Contact() {
  return (
    <section className=" min-h-screen py-16">
      {/* Title */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-700 mt-2">
          We'd love to hear from you!{" "}
          <span className="font-semibold">The Book Haven</span>
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row w-11/12 mx-auto gap-12">
        {/* Contact Info */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 flex-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Info
          </h3>
          <div className="flex items-center gap-4">
            <MapPinIcon className="w-6 h-6 text-primary" />
            <p>123 Book Street, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="w-6 h-6 text-primary" />
            <p>+880 123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon className="w-6 h-6 text-primary" />
            <p>support@thebookhaven.com</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 flex-1"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h3>

          <motion.input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            whileFocus={{ scale: 1.05, borderColor: "#7e22ce" }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            whileFocus={{ scale: 1.05, borderColor: "#7e22ce" }}
          />
          <motion.input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full"
            whileFocus={{ scale: 1.05, borderColor: "#7e22ce" }}
          />
          <motion.textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows={5}
            whileFocus={{ scale: 1.02, borderColor: "#7e22ce" }}
          />

          <motion.button
            type="submit"
            className="btn btn-primary mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
