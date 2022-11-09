import { render, waitFor } from "@testing-library/react-native";
import React from "react";
import { getCurrentWeatherForGroupMock200, mock } from "../network/mock";
import { HomeScreen } from "./HomeScreen";

describe("HomeScreen", () => {
  afterEach(() => {
    jest.useFakeTimers();
    mock.reset();
    jest.clearAllMocks();
  });
  it("renders correctly", async () => {
    getCurrentWeatherForGroupMock200();

    const screen = render(<HomeScreen />);
    screen.debug({ message: "optional message1" });

    await waitFor(() => {
      screen.debug({ message: "optional message2" });

      expect(screen.queryAllByText("xxx")).toBeTruthy();
    });
  });
});
