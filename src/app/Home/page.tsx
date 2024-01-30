import PageTitle from "@/components/PageTitle/page";
import CarouselHome from "@/components/Slider/CarouselHome";
import { seasonsData, seasonsNow } from "@/components/type";
import { GetSeason } from "@/repository/getAnime";
import { seasonsRepository } from "@/repository/getSeasons";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { GoStarFill } from "react-icons/go";
import NextImage from "next/image";
export default async function Home() {
  const animeData: seasonsNow = await GetSeason({ limit: 12, page: 1 });

  return (
    <main>
      <CarouselHome />
      <PageTitle title="Sedang Tayang" />
      <div className="mt-10">
        <div className="container">
          <div className="row ">
            {animeData?.data.map((season: seasonsData, idx: number) => (
              <div className="col-12 sm:col-6 md:col-3 mb-3 w-full" key={idx}>
                {/* <div className="absolute inset-0 bg-center dark:bg-black"></div>
                <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                  <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                    <Image
                      src={season.images.webp.large_image_url}
                      className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                      alt={season.title}
                      removeWrapper
                      as={NextImage}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 text-wrap">
                    <h1 className="font-serif text-sm hover:text-xl font-bold text-white transition duration-1000 ease-in-out w-3/4">
                      {season.title}
                    </h1>
                    <h1 className="text-sm font-light text-gray-200">
                     {}
                    </h1>
                  </div>
                </div>
             */}
                <Card
                  isFooterBlurred
                  radius="lg"
                  className="border-none w-full group relative m-0 flex h-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"
                >
                  <Image
                    alt={season.title}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110 group-hover:opacity-70"
                    height={"100%"}
                    src={season.images.webp.large_image_url}
                    removeWrapper
                    width={"100%"}
                  />
                  <div className="absolute bg-center w-20 h-20 bg-primary top-0 right-0  z-10 rounded-bl-full">
                    <div className="my-auto flex flex-col justify-start items-center w-full h-full">
                      <div className="text-end text-2xl rotate-[45deg] ml-10"><GoStarFill /></div>
                      <p className="text-end text-2xl rotate-[45deg]">{season.score}</p>
                    </div>
                  </div>
                  <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-visible py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex justify-start items-center gap-2">
                        <p className="text-base text-white/80 text-wrap">
                          {season.title}
                        </p>
                        <p className="text-base text-white/80 text-wrap"></p>
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        {season.genres.map((genre) => (
                          <Button
                            className="text-tiny text-white bg-black/20"
                            variant="flat"
                            color="default"
                            radius="lg"
                            size="sm"
                            key={genre.mal_id}
                          >
                            {genre.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
