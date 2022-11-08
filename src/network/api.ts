import { API_KEY } from "../consts";
import { client } from "./config";
import { GetCurrentWeatherForGroup } from "./types";

export const getCurrentWeatherForGroup = async (
  cities: number[]
): GetCurrentWeatherForGroup =>
  client.get("group", {
    params: { id: cities.toString(), appid: API_KEY, units: "metric" },
  });
