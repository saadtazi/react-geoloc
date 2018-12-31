# react-geoloc

> React Geolocation with Hooks

[![NPM](https://img.shields.io/npm/v/react-geoloc.svg)](https://www.npmjs.com/package/react-geoloc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `@next`

## Install

```bash
npm install --save react-geoloc
```

## Usage

```tsx
import LocationProvider, {
  useLocationContext
} from "react-geoloc/dist/index.js";

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
  const { error, isFetching, position, fetchLocation } = useLocationContext();
  // useEffect(() => { fetchLocation()}, [])
  // fetchLocation();
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
      <pre>{JSON.stringify(error)}</pre>
      <hr />
      <button onClick={fetchLocation}>Find me!</button>
    </div>
  );
}
```

## Props

- `error`: null || [`PositionError`](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) (`{code: number, message: string}`)
- `isFetching`: boolean. Wether or not the position is currently being fetched
- `position`: a [`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position) object
- `fetchLocation`: a function that takes an optional [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

## License

MIT © [saadtazi](https://github.com/saadtazi)
