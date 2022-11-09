import { render } from "@testing-library/react-native";
import React from "react";
import { DetailsScreen } from "./DetailsScreen";

const props: any = {
  navigation: {},
  route: {
    params: {
      item: {
        cloudCoverage: 0,
        dataId: 2988507,
        description: "clear sky",
        feels_like: 13.64,
        humidity: 76,
        icon: "01d",
        id: 800,
        main: "Clear",
        name: "Paris",
        pressure: 1007,
        temp: 14.18,
        temp_max: 15.12,
        temp_min: 13.43,
        windSpeed: 6.69,
      },
    },
  },
};

describe("DetailsScreen", () => {
  it("should display city name passed by route", () => {
    const { getByText } = render(<DetailsScreen {...props} />);
    expect(getByText("Paris")).toBeTruthy();
  });
});
