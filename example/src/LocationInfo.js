import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export default function LocationInfo({
  position,
  error,
  isFetching,
  isWatching
}) {
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
        <ListItem>
          <ListItemText
            primary="isWatching?"
            secondary={JSON.stringify(isWatching)}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Error?" secondary={error.message || "None"} />
        </ListItem>
      </List>
    </React.Fragment>
  );
}
