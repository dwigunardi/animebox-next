"use client";
import PageTitle from "@/components/PageTitle/page";
import CarouselHome from "@/components/Slider/CarouselHome";
import { seasonsRepository } from "@/repository/getSeasons";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export default function Home() {
  const { data, isLoading } = seasonsRepository.hooks.useSeasonNow({
    limit: 12,
    page: 1,
  });
  console.log(data);
  return (
    <main>
      <CarouselHome />
      <PageTitle title="Sedang Tayang" />
      <div className="mt-10">
        <div className="container">
          <div className="row ">
            {data?.data.map((season: any) => (
              <div className="col-12 sm:col-6 md:col-3 mb-3">
                <Card className="col-span-12 sm:col-span-4 h-[500px] relative">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-contain"
                    src={season.images.webp.large_image_url}
                  />
                  <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                      <div className="flex flex-col">
                        <p className="text-lg text-white/60">{season.title}</p>
                      </div>
                    </div>
                    <Button radius="full" size="sm">
                      Get App
                    </Button>
                  </CardFooter>
                  <div className="absolute bg-primary w-full h-full opacity-20 transition-all ease-in-out hover:block" style={{display: 'none'}}></div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
