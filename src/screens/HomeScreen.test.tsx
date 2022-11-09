import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import {
  getCurrentWeatherForGroupMock200,
  getCurrentWeatherForGroupMock400,
  groupData,
  mock,
} from "../network/mock";
import { normalizeWeatherData } from "../utils";
import { HomeScreen } from "./HomeScreen";

describe("HomeScreen", () => {
  afterEach(() => {
    jest.useFakeTimers();
    mock.reset();
    jest.clearAllMocks();
  });
  it("display expecting names of cities", async () => {
    getCurrentWeatherForGroupMock200();
    let props: any;
    const screen = render(<HomeScreen {...props} />);
    await waitFor(() => {
      expect(screen.getAllByText("Wroclaw")).toBeTruthy();
      expect(screen.getAllByText("Krakow")).toBeTruthy();
    });
  });
  it("call navigate function when pressed on list item", async () => {
    getCurrentWeatherForGroupMock200();
    let props: any = {
      navigation: {
        navigate: jest.fn(),
      },
    };

    const screen = render(<HomeScreen {...props} />);
    await waitFor(() => {
      const wroclawItem = screen.getByTestId("list-item-Wroclaw");
      expect(wroclawItem).toBeTruthy();
      fireEvent.press(wroclawItem);

      const expectedCityData = normalizeWeatherData(groupData.list[1]);
      console.log({ expectedCityData });
      expect(props.navigation.navigate).toHaveBeenCalledWith("Details", {
        item: expectedCityData,
      });
    });
  });

  it("display only ActivityIndicator in case of 400 status in response", async () => {
    getCurrentWeatherForGroupMock400();
    let props: any;
    const screen = render(<HomeScreen {...props} />);
    await waitFor(() => {
      expect(screen.getByTestId("loader")).toBeTruthy();
    });
  });
});
