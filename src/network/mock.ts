import MockAdapter from "axios-mock-adapter";
import { client } from "./config";

export const mock = new MockAdapter(client, { onNoMatch: "throwException" });

export const groupData = {
  cnt: 2,
  list: [
    {
      coord: { lon: 19.9167, lat: 50.0833 },
      sys: {
        country: "PL",
        timezone: 3600,
        sunrise: 1667886089,
        sunset: 1667920002,
      },
      weather: [
        { id: "800", main: "Clear", description: "clear sky", icon: "01d" },
      ],
      main: {
        temp: 285.58,
        feels_like: 284.86,
        temp_min: 284.26,
        temp_max: 287.03,
        pressure: 1018,
        humidity: 76,
      },
      visibility: 10000,
      wind: { speed: 0.51, deg: 0 },
      clouds: { all: 0 },
      dt: 1667902158,
      id: 3094802,
      name: "Krakow",
    },
    {
      coord: { lon: 17.0333, lat: 51.1 },
      sys: {
        country: "PL",
        timezone: 3600,
        sunrise: 1667886965,
        sunset: 1667920509,
      },
      weather: [
        { id: "800", main: "Clear", description: "clear sky", icon: "01d" },
      ],
      main: {
        temp: 288.11,
        feels_like: 287.46,
        temp_min: 286.99,
        temp_max: 290.27,
        pressure: 1019,
        humidity: 69,
      },
      visibility: 10000,
      wind: { speed: 2.57, deg: 190 },
      clouds: { all: 0 },
      dt: 1667902158,
      id: 3081368,
      name: "Wroclaw",
    },
  ],
};

export const getCurrentWeatherForGroupMock200 = () =>
  mock.onGet("group").reply(200, groupData);

export const getCurrentWeatherForGroupMock400 = () =>
  mock.onGet("group").reply(400);

// export const postLoginMock412 = () => mock.onPost("/auth/login").reply(412);
// export const postLoginMock422 = () => mock.onPost("/auth/login").reply(422);
// export const postSignUpMock200 = () =>
//   mock.onPost("/auth/registration").reply(200);

// export const fetchUserProfileApiMock200 = () =>
//   mock.onGet("/user/profile").reply(200, userData);

// export const fetchProvidersMock200 = () =>
//   mock.onGet("/common/tenants").reply(200, tenantsData);
// export const fetchProviderRegulationsMock200 = () =>
//   mock.onGet("/common/tenant+policies").reply(200, providerRegulationsData);
