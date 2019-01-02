import React from "react";
import { mount } from "enzyme";

import LocationProvider, { useLocationContext } from "./index";

declare global {
  namespace NodeJS {
    interface Global {
      navigator: any;
    }
  }
}

function TestComponent() {
  const { error, isFetching, position, fetchLocation } = useLocationContext();
  const coords = (position && position.coords) || ({} as Coordinates);
  return (
    <React.Fragment>
      <div data-isfetching>{isFetching}</div>
      <div data-latitude>{coords.latitude || "N/A"}</div>
      <div data-longitude>{coords.longitude || "N/A"}</div>
      <div data-error>{error.message || "N/A"}</div>
      <button onClick={() => fetchLocation()}>Find me</button>
    </React.Fragment>
  );
}

function buildValidCoordinates(coords: any) {
  const defaultCoords = [
    "latitude",
    "longitude",
    "altitude",
    "accuracy",
    "altitudeAccuracy",
    "heading",
    "speed"
  ].reduce((acc, p) => {
    acc[p] = null;
    return acc;
  }, {});
  return { ...defaultCoords, ...coords };
}

function mockGeolocation({
  position,
  error
}: {
  position?: Position;
  error?: PositionError;
}): Geolocation {
  const geolocationMock = ["getCurrentPosition", "watchPosition"].reduce(
    (acc, fname) => {
      acc[fname] = jest.fn((successFn, errorFn) => {
        if (position) {
          return successFn(position);
        }
        return errorFn(error);
      });
      return acc;
    },
    {} as Geolocation
  );
  geolocationMock.clearWatch = jest.fn();
  global.navigator.geolocation = geolocationMock;
  return geolocationMock;
}

describe("LocationProvider", () => {
  it("is truthy", () => {
    expect(LocationProvider).toBeTruthy();
  });

  let mocks: Geolocation;

  describe("when everything goes well", () => {
    beforeEach(() => {
      mocks = mockGeolocation({
        position: {
          coords: buildValidCoordinates({ latitude: 10, longitude: 12 }),
          timestamp: Date.now()
        } as Position
      });
    });

    it("calls immediately getCurrentPosition() when lazy is false", () => {
      const wrapper = mount(
        <LocationProvider lazy={false}>
          <TestComponent />
        </LocationProvider>
      );
      expect(mocks.watchPosition).toBeCalledTimes(0);
      expect(mocks.getCurrentPosition).toBeCalledTimes(1);
      expect(wrapper.find("[data-latitude]").text()).toBe("10");
      expect(wrapper.find("[data-longitude]").text()).toBe("12");
    });

    it("does not call  getCurrentPosition() when lazy is true", () => {
      const wrapper = mount(
        <LocationProvider lazy={true}>
          <TestComponent />
        </LocationProvider>
      );
      expect(mocks.watchPosition).toBeCalledTimes(0);
      expect(mocks.getCurrentPosition).toBeCalledTimes(0);
      expect(wrapper.find("[data-latitude]").text()).toBe("N/A");
      expect(wrapper.find("[data-longitude]").text()).toBe("N/A");
    });

    it("calls  watchPosition() when watch is true", () => {
      const wrapper = mount(
        <LocationProvider lazy={true} watch={true}>
          <TestComponent />
        </LocationProvider>
      );
      expect(mocks.watchPosition).toBeCalledTimes(1);

      expect(mocks.getCurrentPosition).toBeCalledTimes(0);
      expect(wrapper.find("[data-latitude]").text()).toBe("10");
      expect(wrapper.find("[data-longitude]").text()).toBe("12");
    });
  });

  describe("when there is a geolocation error", () => {
    beforeEach(() => {
      mocks = mockGeolocation({
        error: {
          code: 18,
          message: "Geolocation crashed!",
          PERMISSION_DENIED: 0,
          POSITION_UNAVAILABLE: 0,
          TIMEOUT: 0
        }
      });
    });
  });
});
