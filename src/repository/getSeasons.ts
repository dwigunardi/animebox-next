import useSWR from "swr";
import { http } from "../utils/http";

interface params {
  page: number | string;
  limit: number | string;
}
const url = {
  getListSeasonNow(page: number | string, limit: number | string) {
    return `/seasons/now?page=${page}&limit=${limit}`;
  },
};

const hooks = {
  useSeasonNow({ page, limit }: params) {
    return useSWR(url.getListSeasonNow(page, limit), http.fetcher);
  },
};

const api = {};

export const seasonsRepository = {
  url,
  hooks,
  api,
};
