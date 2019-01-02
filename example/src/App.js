// useEffect needed to retrieve location "immediately" (see below)
// import React, { Component, useEffect } from "react";
import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

import { ThemeProvider, makeStyles } from "@material-ui/styles";

import LocationProvider, {
  useLocationContext
} from "react-geoloc/dist/index.js";

import githubImg from "./github.png";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const useStyles = makeStyles(theme => {
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
              <li>You can decide when you request/fetch user location</li>
              <li>
                you can specify any{" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions">
                  Geolocation API options
                </a>
                , like <code>enablehighAccuracy</code> or <code>timeout</code>.
              </li>
            </ul>
          </Typography>
          <Typography variant="h4">Example</Typography>
          {/* REAL EXAMPLE */}
          <LocationProvider lazy={true} watch={false}>
            <MyTestComponent />
          </LocationProvider>
          {/* END REAL EXAMPLE */}

          <Typography style={{ marginTop: 30 }} component="div">
            <Divider />
            Code used in the example can be found{" "}
            <a href="https://github.com/saadtazi/react-geoloc/blob/master/example/src/App.js">
              here
            </a>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

function MyTestComponent() {
  const { error, isFetching, position, fetchLocation } = useLocationContext();
  useEffect(
    () => {
      if (error.message) {
        alert(error.message);
      }
    },
    [error]
  );
  const { latitude, longitude, altitude } = position && (position.coords || {});
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary="Latitude" secondary={latitude || "N/A"} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Longitude" secondary={longitude || "N/A"} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Altitude" secondary={altitude || "N/A"} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="isFetching?"
            secondary={JSON.stringify(isFetching)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Error?" secondary={error.message || "None"} />
        </ListItem>
      </List>
      <Button color="default" onClick={() => fetchLocation()}>
        Geolocate me!
      </Button>
    </React.Fragment>
  );
}
