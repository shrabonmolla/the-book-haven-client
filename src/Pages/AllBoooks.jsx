import React from "react";
import Table from "../Components/Table";
import { useLoaderData } from "react-router";

export default function AllBoooks() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      AllBoooks
      <div className="grid gap-4 w-10/12 m-auto">
        {books.map((book, index) => (
          <Table key={book._id} book={book} index={index} />
        ))}
      </div>
    </div>
  );
}
