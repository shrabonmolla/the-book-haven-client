import React, { useEffect, useState } from "react";
import BookCard from "../Components/BookCard/BookCard";

export default function AllBoooks() {
  const [books, setbooks] = useState(null);
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetch(`http://localhost:3000/all-books?page=${page}&limit=12`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setbooks(data);
      })
      .catch((err) => console.log(err));
  }, [page]);
  console.log(books);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Total Books Found:{books?.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-10/12 m-auto">
        {books &&
          books.map((book, index) => (
            <BookCard key={book._id} book={book} index={index} />
          ))}
      </div>
      {/* pagination */}
      <div className="join flex justify-center p-4">
        <button
          onClick={() => setpage(page - 1)}
          className="join-item btn btn-outline"
        >
          Previous page
        </button>
        <button
          onClick={() => setpage(page + 1)}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
