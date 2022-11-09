import { normalizeWeatherData } from ".";

const item = {
  coord: { lat: 48.8534, lon: 2.3488 },
  weather: [
    {
      id: "1",
      description: "clear sky",
      icon: "12d",
    },
  ],
  clouds: { all: 0 },
  dt: 1667902155,
  id: 2988507,
  main: {
    feels_like: 13.64,
    humidity: 76,
    pressure: 1007,
    temp: 14.18,
    temp_max: 15.12,
    temp_min: 13.43,
  },
  name: "Paris",
  visibility: 10000,
  wind: { deg: 180, speed: 6.69 },
};

const expectedNormalizedData = {
  cloudCoverage: 0,
  dataId: 2988507,
  description: "clear sky",
  feels_like: 13.64,
  humidity: 76,
  icon: "12d",
  id: "1",
  name: "Paris",
  pressure: 1007,
  temp: 14.18,
  temp_max: 15.12,
  temp_min: 13.43,
  windSpeed: 6.69,
};

describe("utils", () => {
  it("normalize function should return predicable data", () => {
    const normalizedData = normalizeWeatherData(item);
    expect(normalizedData).toEqual(expectedNormalizedData);
  });
});
