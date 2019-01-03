# react-geoloc

> React Geolocation with Hooks

[![NPM](https://img.shields.io/npm/v/react-geoloc.svg)](https://www.npmjs.com/package/react-geoloc)
[![Build Status](https://travis-ci.org/saadtazi/react-geoloc.svg?branch=master)](https://travis-ci.org/saadtazi/react-geoloc)

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until ~~React 16.7 final~~ they are officially released.
>
> You'll need to install `react`, `react-dom`, etc at `@next` (until hooks are officially released).

## Install

```bash
npm install --save react-geoloc
```

## Usage

```tsx
import LocationProvider, { useLocationContext } from "react-geoloc";

export default class App extends Component {
  render() {
    return (
      <div>
        <LocationProvider lazy={true} watch={false}>
          <Test />
        </LocationProvider>
      </div>
    );
  }
}

function Test() {
  const {
    error,
    isFetching,
    isWatching,
    position,
    fetchLocation,
    watchLocation,
    stopWatching
  } = useLocationContext();
  // useEffect(() => { fetchLocation()}, []); // note: use lazy={false} instead
  const { latitude, longitude, altitude } = position && (position.coords || {});
  return (
    <div>
      <pre>latitude: {latitude}</pre>
      <hr />
      <pre>longitude: {longitude}</pre>
      <hr />
      <pre>altitude: {altitude}</pre>
      <hr />
      <pre>isFetching: {JSON.stringify(isFetching)}</pre>
      <hr />
      <pre>isWatching: {JSON.stringify(isWatching)}</pre>
      <hr />
      <pre>{JSON.stringify(error)}</pre>
      <hr />
      <button onClick={fetchLocation}>Find me!</button>
      <button onClick={watchLocation}>watch my location!</button>
      <button onClick={stopWatching} disabled={!isWatching}>
        Stop watching
      </button>
    </div>
  );
}
```

## Props

- `lazy`: Boolean. `true` to immediately retrieve the geolocation. default: `true`
- `watch`: Boolean. `true` to immediately watch the geolocation. default: `false`
- `options`: [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions). The default `PositionOptions`used when calling `fetchCurrentLocation` or `watchLocation`

Note: the `options` prop is used when geolocation functions are called on mount (when `lazy` is false or `watch` is true) or when no parameters are provided when explicitly calling `fetchLocation` or `watchLocation` (see `useLocationContext` below)

## useLocationContext Attributes

- `error`: null | [`PositionError`](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) (`{code: number, message: string}`)
- `isFetching`: boolean. Wether or not the position is currently being fetched
- `isWatching`: boolean. Wether or not the position is currently being watched
- `position`: a [`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position) object
- `fetchLocation`: a function that takes an optional [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions). Warning: might not be present.
- `watchLocation`: a function that takes an optional [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) and watch the position (which means `position` context value will be updated regularly)
- `stopWatching`: a function that allows to stop watching the location.

## License

MIT © [saadtazi](https://github.com/saadtazi)
