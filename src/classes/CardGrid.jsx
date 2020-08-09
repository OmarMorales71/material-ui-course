import React from "react";
import OutlinedCard from "./OutlinedCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: { paddingLeft: "40px", paddingRight: "40px" },
});

function CardGrid() {
  const classes = useStyles();
  return (
    <Grid container spacing={4} justify="center" className={classes.gridContainer}>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OutlinedCard />
      </Grid>
    </Grid>
  );
}

export default CardGrid;
