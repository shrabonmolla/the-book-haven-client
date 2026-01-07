import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Fake data - 20 testimonials
const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review: "Amazing collection of books! I found everything I wanted here.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    review: "The Book Haven is my go-to place for computer science books.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Clara Brown",
    review: "I love the fast delivery and excellent customer service!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "David Wilson",
    review: "Great platform for book lovers. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Emma Davis",
    review: "I found rare books that I couldn’t find anywhere else.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Frank Miller",
    review: "Love the variety of genres and authors.",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Grace Lee",
    review: "The discounts and offers make it irresistible!",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Henry Taylor",
    review: "Smooth interface and very easy to navigate.",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Isla Anderson",
    review: "I discovered new authors I had never heard of before.",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Jack Thomas",
    review: "Fantastic experience. I will keep coming back!",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 11,
    name: "Kara White",
    review: "The Book Haven makes reading so enjoyable.",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 12,
    name: "Liam Harris",
    review: "Easy to find books for all age groups.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 13,
    name: "Mia Martin",
    review: "I love the curated book recommendations.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 14,
    name: "Noah Thompson",
    review: "Great prices and fast shipping.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 15,
    name: "Olivia Garcia",
    review: "Beautiful website and very user-friendly.",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 16,
    name: "Paul Martinez",
    review: "Excellent variety of books and genres.",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 17,
    name: "Quinn Robinson",
    review: "I love the weekly new arrivals section.",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    id: 18,
    name: "Rachel Clark",
    review: "The Book Haven has made reading more fun for my kids.",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 19,
    name: "Sam Lewis",
    review: "I always find something new and exciting to read here.",
    avatar: "https://i.pravatar.cc/150?img=19",
  },
  {
    id: 20,
    name: "Tina Walker",
    review: "Highly recommended for book lovers and collectors.",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-[#f5f5f5] py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Readers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Hear from our happy readers at{" "}
          <span className="font-semibold">The Book Haven</span>
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-2xl p-6 shadow-md h-full flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
              </div>
              <p className="text-gray-600">{t.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
