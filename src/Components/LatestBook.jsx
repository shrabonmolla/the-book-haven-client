import React from "react";
import { use } from "react";
import Table from "./Table";

export default function LatestBook({ bookPromise }) {
  const books = use(bookPromise);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">All Latest Book </h1>
      <div>{books && books.map((book) => <Table book={book}></Table>)}</div>
    </div>
  );
}
