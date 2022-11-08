import axios from "axios";
import { WEATHER_API_URL } from "../consts";

const createHttpClient = (url: string) => {
  const httpClient = axios.create({
    baseURL: url,
    headers: { "content-type": "application/json" },
  });

  return httpClient;
};
export const client = createHttpClient(WEATHER_API_URL);
