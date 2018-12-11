import React, {createContext, useState, useEffect} from 'react';


interface LocationContextStoreInterface {
  error?: any
  isFetching: boolean
  position?: Position
  fetchLocation: Function
}

interface LocationProviderProps {
  lazy: boolean,
  watch: boolean,
  options?: PositionOptions,
  children: React.ReactNodeArray
}

interface PositionErrorInterface {
  code: number,
  message: string
}

export const LocationContext = createContext<LocationContextStoreInterface>({
  isFetching: false,
  fetchLocation: () => {}
})

const LocationProvider: React.FunctionComponent<LocationProviderProps> = ({lazy = true, watch = false, options = {}, children}:LocationProviderProps) => {
  function fetchLocation(opts : PositionOptions) {
    setError(false)
    setIsFetching(true);
    navigator.geolocation.getCurrentPosition(
      handlePosition,
      handleError,
      opts || options
    );
  }
  const [isFetching, setIsFetching] = useState(false);
  const [position, setPosition] = useState<any>({});
  const [error, setError] = useState<boolean|PositionError|PositionErrorInterface>(false);

  if (!("geolocation" in navigator)) {
    setError({code: 99, message: "Geolocation not available"});
  }
  function handlePosition(pos: Position) {
    setError(false);
    setIsFetching(false);
    setPosition(pos);
  }
  function handleError(err: PositionErrorInterface) {
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
      const id = navigator.geolocation.watchPosition(
        handlePosition,
        handleError,
        options
      );
      return function () {
        navigator.geolocation.clearWatch(id);
      }
    }
    return;
  }, []);

  const store: LocationContextStoreInterface = {
    error,
    isFetching,
    position,
    fetchLocation
  }
  return (
      <LocationContext.Provider value={store}>
        {children}
      </LocationContext.Provider>
  )
}

export default LocationProvider;
