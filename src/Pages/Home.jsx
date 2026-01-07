import Banner from "../Components/Banner";
import LatestBook from "../Components/LatestBook";
import { Suspense } from "react";
import BookOftheWeek from "../Components/BookOftheWeek";
import About from "../Components/About";
import Loading from "../Components/Loading";
import BookCard from "../Components/BookCard/BookCard";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import EnglishBook from "./EnglishBook";
import Testimonial from "../Components/Testimonial/Testimonial";
import Statistics from "../Components/Home/Statistics";

export default function Home() {
  const bookPromise = fetch("http://localhost:3000/latest-book").then((res) =>
    res.json()
  );

  return (
    <div>
      {/* <Banner /> */}
      <HeroSlider />

      <Suspense fallback={<Loading />}>
        <LatestBook bookPromise={bookPromise} />
      </Suspense>

      <EnglishBook />
      <BookOftheWeek />
      <Statistics />
      <Testimonial />
      <About />
    </div>
  );
}
