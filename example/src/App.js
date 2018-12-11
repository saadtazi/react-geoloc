import React, { Component, useContext } from 'react'

// import LocationProvider, {LocationContext} from 'react-geoloc/dist/index.js';
import LocationProvider, {LocationContext} from 'react-geoloc/dist/index.js';

export default class App extends Component {
  render () {
    return (
      <div>
        <p>Code <a href="https://github.com/saadtazi/react-geoloc">here</a>.
        Example <a href="https://github.com/saadtazi/react-geoloc/blob/master/example/src/App.js">here</a></p>
        <LocationProvider lazy={true} watch={false}>
        <Test/>
        </LocationProvider>
      </div>
    )
  }
}

function Test() {
  const {
    error,
    isFetching,
    position,
    fetchLocation
  } = useContext(LocationContext);
  // useEffect(() => { fetchLocation()}, [])
  // fetchLocation();
  error.message && alert(error.message)
  const {latitude, longitude, altitude} = position && (position.coords || {});
  return (
    <div>
      <pre>latitude: {latitude}</pre>
      <hr/>
      <pre>longitude: {longitude}</pre>
      <hr/>
      <pre>altitude: {altitude}</pre>
      <hr/>
      <pre>isFetching: {JSON.stringify(isFetching)}</pre>
      <hr/>
      <pre>{error.message}</pre>
      <hr/>
      <button onClick={fetchLocation}>Find me!</button>
      </div>
  );
}
