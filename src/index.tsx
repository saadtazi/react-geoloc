import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export interface LocationContextStoreInterface {
  error?: PositionError | PositionErrorInterface | false;
  isFetching: boolean;
  position?: Position;
  fetchLocation: Function;
  isWatching: boolean;
  watchLocation: Function;
  stopWatching: Function;
}

interface LocationProviderProps {
  lazy?: boolean;
  watch?: boolean;
  options?: PositionOptions;
  children: React.ReactNode;
}

interface PositionErrorInterface {
  code: number;
  message: string;
}

export const LocationContext = createContext<LocationContextStoreInterface>({
  isFetching: false,
  isWatching: false,
  fetchLocation: () => {},
  watchLocation: () => {},
  stopWatching: () => {}
});

export const useLocationContext = () => {
  return useContext(LocationContext);
};

const LocationProvider: React.FunctionComponent<LocationProviderProps> = ({
  lazy = true,
  watch = false,
  options = {},
  children
}: LocationProviderProps) => {
  const [watchId, setWatchId] = useState(-1);
  function fetchLocation(opts: PositionOptions) {
    setError(false);
    setIsFetching(true);
    navigator.geolocation.getCurrentPosition(
      handlePosition,
      handleError,
      opts || options
    );
  }
  function doWatch(opts: PositionOptions) {
    if (watchId !== -1) {
      return watchId;
    }
    setError(false);
    const id = navigator.geolocation.watchPosition(
      handlePosition,
      handleError,
      opts || options
    );
    setWatchId(id);
    return id;
  }
  function stopWatching() {
    if (watchId) {
      setWatchId(-1);
      navigator.geolocation.clearWatch(watchId);
    }
  }
  const [isFetching, setIsFetching] = useState(false);
  const [position, setPosition] = useState<any>({});
  const [error, setError] = useState<
    false | PositionError | PositionErrorInterface
  >(false);

  if (!("geolocation" in navigator)) {
    setError({ code: 99, message: "Geolocation not available" });
  }
  function handlePosition(pos: Position) {
    setError(false);
    setIsFetching(false);
    setPosition(pos);
  }
  function handleError(err: PositionErrorInterface) {
    setIsFetching(false);
    setError(err);
  }

  // at init only
  useEffect(function() {
    if (!lazy) {
      setIsFetching(true);
      fetchLocation(options);
    }
  }, []);

  // at init only
  useEffect(function() {
    if (watch) {
      doWatch(options);
      return stopWatching;
    }
    return;
  }, []);

  const store: LocationContextStoreInterface = {
    error,
    isFetching,
    position,
    fetchLocation,
    isWatching: watchId != -1,
    watchLocation: doWatch,
    stopWatching
  };
  return (
    <LocationContext.Provider value={store}>
      {children}
    </LocationContext.Provider>
  );
};

LocationProvider.propTypes = {
  lazy: PropTypes.bool.isRequired,
  watch: PropTypes.bool.isRequired,
  options: PropTypes.shape({
    enableHighAccuracy: PropTypes.bool.isRequired,
    maximumAge: PropTypes.number.isRequired,
    timeout: PropTypes.number.isRequired
  }).isRequired
};

LocationProvider.defaultProps = {
  lazy: true,
  watch: false,
  options: {
    enableHighAccuracy: false,
    timeout: Infinity,
    maximumAge: 0
  }
};

export default LocationProvider;
