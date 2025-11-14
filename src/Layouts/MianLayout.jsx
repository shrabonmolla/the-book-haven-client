import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export default function MianLayout() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="mt-6">
        <Navbar />
      </nav>
      <section className="flex-1">
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
