"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { ThemeSwitcher } from "@/app/themeChecker";
import { topAnimeRepository } from "@/repository/getTopAnime";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { FaCircleArrowRight } from "react-icons/fa6";
function CarouselHome() {
  const { data, isLoading } = topAnimeRepository.hooks.useTopAnime({
    page: 1,
    limit: 8,
    filter: "airing",
    type: "tv",
  });

  function potongTeks(teks: string) {
    if (teks.length > 400) {
      return teks.substring(0, 400) + "...";
    } else {
      return teks;
    }
  }

  return (
    <div className="mt-5">
      <Swiper
        pagination={{
          type: "progressbar",
          clickable: true,
          dynamicBullets: true,
          renderProgressbar(progressbarFillClass) {
            return '<span class="' + progressbarFillClass + '"></span>';
          },
        }}
        slidesPerView={1}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop
        autoplay={{ delay: 3000 }}
        className="mySwiper h-[600px] w-full"
      >
        {data?.data.map((anime: any) => (
          <SwiperSlide key={anime.mal_id} style={{ position: "relative" }}>
            <div className="swiper-lazy-preloader"></div>
            <Image
              src={
                anime.trailer.images.maximum_image_url ||
                anime.images.jpg.image_url
              }
              alt={anime.title}
              fetchPriority="auto"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-25"></div>
            <div className="absolute top-[40%] left-16">
              {anime.genres.map((genre: any) => (
                <Button
                  key={genre.mal_id}
                  color="primary"
                  onClick={() => window.open(`${genre.url}`, "_blank")}
                  className="mr-2"
                >
                  {genre.name}
                </Button>
              ))}
              <h1 className="text-3xl font-bold mt-2">{anime.title}</h1>
              <div className="mt-2 w-1/2">
                <p className="text-lg ">{potongTeks(anime.synopsis)}</p>
              </div>
              <Button color="primary" endContent={<FaCircleArrowRight />} className="mt-5">
              Lihat Lebih Lanjut
            </Button>
            </div>
            
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default CarouselHome;
