import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { ThemeProvider, makeStyles } from "@material-ui/styles";

import LocationProvider, {
  useLocationContext
} from "react-geoloc/dist/index.js";

import LocationInfo from "./LocationInfo";

import githubImg from "./github.png";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const useStyles = makeStyles(theme => {
  console.log(theme.palette);
  return {
    githubIcon: {
      width: 30
    },
    toolbar: {
      display: "grid",
      justifyContent: "space-between",
      gridTemplateColumns: "1fr 40px"
    },
    hero: {
      margin: "25px 25px 50px 25px",
      padding: "50px 25px 50px 25px",
      backgroundColor: "#737373",
      borderRadius: 10,
      textAlign: "center",
      color: theme.palette.primary.contrastText
    },
    exampleTabs: {
      backgroundColor: theme.palette.grey["100"]
    },
    exampleTitle: {
      marginTop: 20
    }
  };
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
}

function Page() {
  const classes = useStyles();
  const [tab, setTab] = useState("fetch");
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            React-Geoloc
          </Typography>
          <a href="https://github.com/saadtazi/react-geoloc">
            <img
              className={classes.githubIcon}
              src={githubImg}
              alt="github repo"
              title="github repo"
            />
          </a>
        </Toolbar>
      </AppBar>
      <Card>
        <CardContent>
          <div className={classes.hero}>
            <Typography variant="h3" color="inherit">
              Geolocation React Component
            </Typography>
            <Typography variant="h5" color="inherit">
              ... using React Hooks and React Context.
            </Typography>
          </div>
          <Typography variant="h4" color="inherit">
            Features
          </Typography>
          <Typography component="div">
            <ul>
              <li>
                You can get the{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Position">
                  device position
                </a>
                , including its{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Coordinates">
                  coordinates
                </a>
                .
              </li>
              <li>
                You can decide when you request/fetch user location, on mount
                through the <code>lazy</code> prop or on demand using the{" "}
                <code>fetchLocation()</code>
                context attribute
              </li>
              <li>You can watch the location</li>
              <li>
                You can decide when you start and stop watching, through the{" "}
                <code>watch</code> prop or <code>watchPosition</code> and{" "}
                <code>stopWatching</code> context attribute.
              </li>
              <li>
                you can specify any{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">
                  Geolocation API options
                </a>
                , like <code>enableHighAccuracy</code> or <code>timeout</code>.
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
      <Toolbar className={classes.exampleTabs}>
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab value="fetch" label="Fetch Location Example" />
          <Tab value="watch" label="Fetch Location Example" />
        </Tabs>
      </Toolbar>
      <Card>
        <CardContent>
          {tab === "fetch" && (
            <React.Fragment>
              <Typography variant="h4" className={classes.exampleTitle}>
                Fetch Location Example
              </Typography>
              <LocationProvider lazy={true} watch={false}>
                <FetchLocationComponent />
              </LocationProvider>
            </React.Fragment>
          )}
          {tab === "watch" && (
            <React.Fragment>
              <Typography variant="h4" className={classes.exampleTitle}>
                Watch Location Example
              </Typography>
              <LocationProvider lazy={true} watch={false}>
                <WatchLocationComponent />
              </LocationProvider>
            </React.Fragment>
          )}
          <Typography style={{ marginTop: 30 }} component="div">
            <Divider />
            Code used in the examples can be found{" "}
            <a href="https://github.com/saadtazi/react-geoloc/blob/master/example/src/App.js">
              here
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function FetchLocationComponent() {
  const {
    error,
    isFetching,
    position,
    fetchLocation,
    isWatching
  } = useLocationContext();
  useEffect(
    () => {
      if (error.message) {
        alert(error.message);
      }
    },
    [error]
  );
  return (
    <React.Fragment>
      <Button color="default" onClick={() => fetchLocation()}>
        Geolocate me!
      </Button>
      <LocationInfo
        position={position}
        error={error}
        isFetching={isFetching}
        isWatching={isWatching}
      />
    </React.Fragment>
  );
}

function WatchLocationComponent() {
  const {
    error,
    isFetching,
    position,
    watchLocation,
    stopWatching,
    isWatching
  } = useLocationContext();
  // only to verify that a new position is receveid when the device is moving
  useEffect(
    () => {
      console.log("location received", position);
    },
    [position]
  );
  useEffect(
    () => {
      if (error.message) {
        alert(error.message);
      }
    },
    [error]
  );
  return (
    <React.Fragment>
      <Button
        color="default"
        onClick={() => watchLocation()}
        disabled={isWatching}
      >
        Watch my location!
      </Button>
      <Button
        color="default"
        onClick={() => stopWatching()}
        disabled={!isWatching}
      >
        Stop watching
      </Button>
      <LocationInfo
        position={position}
        error={error}
        isFetching={isFetching}
        isWatching={isWatching}
      />
    </React.Fragment>
  );
}
