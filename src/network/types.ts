export interface ApiResponse<Data> {
  status: number;
  msg: string;
  data?: Data;
}
export interface CurrentWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: string;
    description: string;
    icon: string;
  }[];
  base?: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys?: {
    type?: number;
    id?: number;
    country?: string;
    sunrise?: number;
    sunset?: number;
  };
  timezone?: number;
  id: number;
  name: string;
  cod?: number;
}

export interface ComponentWeatherData {
  id: string;
  name: string;
  dataId: number;
  description: string;
  icon: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  cloudCoverage: number;
}

export type GetCurrentWeatherForGroup = Promise<
  ApiResponse<{ cnt: number; list: CurrentWeatherData[] }>
>;

export type RootStackParamList = {
  Weather: undefined;
  Details: { item: ComponentWeatherData };
};
