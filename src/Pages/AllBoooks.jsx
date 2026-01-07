import React, { useEffect, useState } from "react";
import BookCard from "../Components/BookCard/BookCard";
import useAxios from "../Hooks/useAxios";

export default function AllBooks() {
  const axisoInstance = useAxios();

  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minRating, setMinRating] = useState("");

  const [categories, setCategories] = useState([]);

  // Fetch categories once
  useEffect(function () {
    axisoInstance.get("/categories").then(function (res) {
      setCategories(res.data);
    });
  }, []);

  // Fetch books whenever filters or page change
  useEffect(
    function () {
      const params = new URLSearchParams({
        query: search,
        category: category,
        minRating: minRating,
        page: page,
        limit: 12,
      }).toString();

      axisoInstance
        .get(`/books/search?${params}`)
        .then(function (res) {
          setBooks(res.data.books);
          setTotal(res.data.total);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [search, category, minRating, page]
  );

  return (
    <div className="w-11/12 mx-auto py-8">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={function (e) {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="input input-bordered w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={function (e) {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full md:w-1/4"
        >
          <option value="">All Categories</option>
          {categories.map(function (cat) {
            return (
              <option key={cat} value={cat}>
                {cat}
              </option>
            );
          })}
        </select>

        <select
          value={minRating}
          onChange={function (e) {
            setMinRating(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full md:w-1/4"
        >
          <option value="">All Ratings</option>
          <option value="1">1 ⭐ & up</option>
          <option value="2">2 ⭐ & up</option>
          <option value="3">3 ⭐ & up</option>
          <option value="4">4 ⭐ & up</option>
          <option value="5">5 ⭐</option>
        </select>
      </div>

      {/* Books Grid */}
      <h1 className="text-xl font-semibold mb-4">Total Books Found: {total}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {books.map(function (book) {
          return <BookCard key={book._id} book={book} />;
        })}
      </div>

      {/* Pagination */}
      <div className="join flex justify-center mt-6 gap-2">
        <button
          onClick={function () {
            if (page > 1) setPage(page - 1);
          }}
          className="join-item btn btn-outline"
        >
          Previous
        </button>
        <button
          onClick={function () {
            const totalPages = Math.ceil(total / 12);
            if (page < totalPages) setPage(page + 1);
          }}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
