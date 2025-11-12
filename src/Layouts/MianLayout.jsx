import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

export default function MianLayout() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section>
        <Outlet />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
