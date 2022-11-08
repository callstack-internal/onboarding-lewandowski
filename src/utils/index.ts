import { ComponentWeatherData, CurrentWeatherData } from "../network/types";

export const normalizeWeatherData = (
  item: CurrentWeatherData
): ComponentWeatherData => ({
  name: item.name,
  dataId: item.id,
  ...item.weather[0],
  ...item.main,
  windSpeed: item.wind.speed,
  cloudCoverage: item.clouds.all,
});
