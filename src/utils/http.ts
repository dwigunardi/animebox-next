import { appConfig } from "../config/app";
import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: appConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const http = {
  fetcher: async (url: String) => {
    const resp = await instance.get(appConfig.apiUrl + url);
    return resp.data;
  },
  get: async (url: String, opts: any = {}) => {
    const resp = await instance.get(appConfig.apiUrl + url);

    return resp.data;
  },
  post: async (url: String, data: any, opts: any = {}) => {
    const resp = await instance.post(appConfig.apiUrl + url, data);

    return resp.data;
  },
  upload: async (url: String, data: any) => {
    let req = await instance.post(appConfig.apiUrl + url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return req.data;
  },
  put: async (url: String, data: any, opts: any = {}) => {
    const resp = await instance.put(appConfig.apiUrl + url, data);

    return resp.data;
  },
  del: async (url: String, opts: any = {}) => {
    const resp = await instance.delete(appConfig.apiUrl + url);

    return resp.data;
  },

//   uploadAntd: (args: any) => {
//     const file: any = args.file;
//     const request: any = http.upload(file).use(AuthIntercept);

//     request
//       .on("progress", (event) => {
//         args.onProgress(event);
//       })
//       .then((it) => {
//         args.onSuccess(it);
//       })
//       .catch((err) => {
//         args.onError(err);
//       });

//     return request;
//   },
};
