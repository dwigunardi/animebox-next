import { appConfig } from "@/config/app";

export async function GetSeason({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) {
  try {
    const response = await fetch(
      `${appConfig.apiUrl}/seasons/now?page=${page}&limit=${limit}`,
      {
        next: { tags: ["getSeasonNow"] },
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      message: "something went wrong",
      error,
    };
  }
}
interface params {
  page: number | string;
  limit: number | string;
  filter: string;
  type: string;
}

export async function GetTop({ page, limit, filter, type }: params) {
  try {
    const response = await fetch(
      appConfig.apiUrl +
        `/top/anime?page=${page}&limit=${limit}&filter=${filter}&type=${type}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { tags: ["getTopAnime"] },
        cache: "force-cache",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      message: "something went wrong",
      error,
    };
  }
}
