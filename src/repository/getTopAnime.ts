import useSWR from "swr";
import { http } from "../utils/http";

interface params {
  page: number | string;
  limit: number | string;
  filter: string;
  type: string;
}
const url = {
  getListTop(page: number | string, limit: number | string, filter: string, type: string) {
    return `/top/anime?page=${page}&limit=${limit}&filter=${filter}&type=${type}`;
  },
};

const hooks = {
  useTopAnime({ page, limit, filter, type }: params) {
    return useSWR(url.getListTop(page, limit, filter, type), http.fetcher);
  },
};

const api = {};

export const topAnimeRepository = {
  url,
  hooks,
  api,
};
