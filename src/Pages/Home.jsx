import React, { useContext } from "react";
import Banner from "../Components/Banner";
import LatestBook from "../Components/LatestBook";
import { Suspense } from "react";
import BookOftheWeek from "../Components/BookOftheWeek";
import About from "../Components/About";
import Loading from "../Components/Loading";

export default function Home() {
  const bookPromise = fetch(
    "https://book-haven-server-nine.vercel.app/latest-book"
  ).then((res) => res.json());

  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <LatestBook bookPromise={bookPromise} />
      </Suspense>
      <BookOftheWeek />
      <About />
    </div>
  );
}
