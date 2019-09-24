import React from "react";
import AppBar from "@material-ui/core/AppBar";
import AddIcon from "@material-ui/icons/Add";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Grid from "@material-ui/core/Grid";

const AppBarExample = props => (
  <AppBar>
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <AddIcon />
      <InfoOutlinedIcon />
      <NotificationsNoneOutlinedIcon />
    </Grid>
  </AppBar>
);
export default AppBarExample;
