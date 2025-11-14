import React from "react";
import Table from "../Components/Table";
import { useLoaderData } from "react-router";

export default function AllBoooks() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Total Books Found:{books.length}
      </h1>
      <div className="grid gap-4 w-10/12 m-auto">
        {books.map((book, index) => (
          <Table key={book._id} book={book} index={index} />
        ))}
      </div>
    </div>
  );
}
