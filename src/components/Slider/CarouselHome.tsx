import React from "react";

import { GetTop } from "@/repository/getAnime";
import SliderCarousel from "./SliderCarousel";
async function CarouselHome() {
  const dataAnime = await GetTop({
    page: 1,
    limit: 8,
    filter: "airing",
    type: "tv",
  });

  return (
    <div className="mt-5">
      <SliderCarousel dataAnime={dataAnime} />
    </div>
  );
}

export default CarouselHome;
