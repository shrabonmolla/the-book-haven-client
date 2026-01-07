import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

export default function MianLayout() {
  const axiosInstance = useAxios();
  // Fetch categories
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/categories");
      return res.data;
    },
  });

  // Fetch publishers
  const { data: publishers = [] } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axiosInstance.get("/publishers");
      return res.data;
    },
  });

  return (
    <div className="flex flex-col h-screen">
      <nav className="mt-6">
        <Navbar categories={categories} publishers={publishers} />
      </nav>
      <section className="flex-1">
        <Outlet />
      </section>
      <footer>
        <Footer categories={categories} publishers={publishers} />
      </footer>
    </div>
  );
}
