import React from "react";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import BookCard from "../Components/BookCard/BookCard";

export default function FilteredBooks() {
  const { type, value } = useParams();
  const axisoInstance = useAxios();

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books", type, value],
    queryFn: async () => {
      // Converts /books/category/Mathematics → /books?category=Mathematics
      const res = await axisoInstance.get(`/books?${type}=${value}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  // Determine title text based on type
  const sectionTitle =
    type === "category"
      ? `${value} বিষয় এর বই`
      : type === "publisher"
      ? `${value} প্রকাশনী এর বই`
      : "বই";

  return (
    <section className="bg-[#ebebeb] rounded-2xl p-6 md:p-10 w-11/12 mx-auto my-4">
      {/* Section Title */}
      <section className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6">
          {sectionTitle} <span className="text-sm">({books.length})</span>
        </h2>
      </section>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
      >
        {books?.map((book) => (
          <SwiperSlide key={book._id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
