import React from "react";
import MakeTheme from "./classes/MakeTheme";
import DarkMode from "./classes/DarkMode";
import GridExample2 from "./classes/GridExample2";
import OutlinedCard from "./classes/OutlinedCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TableExample from "./classes/TableExample";

const useStyles = makeStyles({
  gridContainer: { paddingLeft: "40px", paddingRight: "40px" },
});

function App() {
  const classes = useStyles();
  return (
    <TableExample />
  );
}

export default App;
