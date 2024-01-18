"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ThemeSwitcher } from "@/app/themeChecker";
import { topAnimeRepository } from "@/repository/getTopAnime";
import Image from "next/image";
function CarouselHome() {
  const { data, isLoading } = topAnimeRepository.hooks.useTopAnime({
    page: 1,
    limit: 8,
    filter: "airing",
    type: "tv",
  });
  console.log(data);
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
          clickable: true,
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        className="mySwiper h-[600px] w-full"
      >
        {isLoading ? <p>Loading...</p> : data?.data.map((anime: any) => (
          <SwiperSlide key={anime.mal_id} style={{ position: "relative" }}>
            <Image
              src={anime.trailer.images.maximum_image_url || anime.images.jpg.image_url}
              alt={anime.title}
              fetchPriority="auto"
              layout="fill"
              objectFit="cover"
            />
            <p>{anime.title}</p>
            <p>{anime.score}</p>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
      <ThemeSwitcher />
    </div>
  );
}

export default CarouselHome;
