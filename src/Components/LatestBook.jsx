import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { use } from "react";
import BookCard from "./BookCard/BookCard";
import { Link } from "react-router";

const LatestBook = ({ bookPromise }) => {
  const books = use(bookPromise);
  return (
    <section className="bg-[#7b7b7b] rounded-2xl p-6 md:p-10 w-11/12 mx-auto">
      {/* Section Title */}
      <section className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#ffffff] mb-6">
          জনপ্রিয় ক্যাটাগরি
        </h2>
        <Link className="btn" to="/allbooks">
          All Book
        </Link>
      </section>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {books?.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestBook;
