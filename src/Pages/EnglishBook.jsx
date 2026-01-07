import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../Hooks/useAxios";
import BookCard from "../Components/BookCard/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Loading from "../Components/Loading";
export default function EnglishBook() {
  const axisoInstance = useAxios();

  const { data } = useQuery({
    queryKey: ["book-category"],
    queryFn: async () => {
      const res = await axisoInstance.get(`/book-category?language=English`);
      return res.data;
    },
  });

  if (!data) {
    return <Loading />;
  }
  return (
    <section className="bg-[#ebebeb] rounded-2xl p-6 md:p-10 w-11/12 mx-auto my-4">
      {/* Section Title */}
      <section className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#000000] mb-6">
          ইংরেজি ভাষার বই <span className="text-sm">({data.length})</span>
        </h2>
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
        {data?.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
