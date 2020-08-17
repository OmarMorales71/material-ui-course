import React from "react";
import MakeTheme from "./classes/MakeTheme";
import DarkMode from "./classes/DarkMode";
import GridExample2 from "./classes/GridExample2";
import OutlinedCard from "./classes/OutlinedCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TableExample from "./classes/TableExample";
import TabsExample from "./classes/TabsExample";
import {Switch, Route, Redirect} from 'react-router-dom'
import TablePaginationExample from "./classes/TablePaginationExample";

const useStyles = makeStyles({
  gridContainer: { paddingLeft: "40px", paddingRight: "40px" },
});

function App() {
  const classes = useStyles();
  return (
    <Switch>
      <Redirect exact from="/home" to="/home/about" />
      <Route exact path="/home/:page?" render={props=> <TabsExample {...props} />} />
      <Route exact path="/pagination" render={props=> <TablePaginationExample {...props} />} />
      
    </Switch>
  );
}

export default App;
