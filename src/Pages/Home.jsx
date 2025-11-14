import React, { useContext } from "react";
import Banner from "../Components/Banner";
import LatestBook from "../Components/LatestBook";
import { Suspense } from "react";
import BookOftheWeek from "../Components/BookOftheWeek";
import About from "../Components/About";

export default function Home() {
  const bookPromise = fetch("http://localhost:3000/latest-book").then((res) =>
    res.json()
  );

  return (
    <div>
      <Banner />
      <Suspense fallback="kire mamam laoding hoitaseeeeeeeeeeeeeeee">
        <LatestBook bookPromise={bookPromise} />
      </Suspense>
      <BookOftheWeek />
      <About />
    </div>
  );
}
