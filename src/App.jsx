import React from "react";
import {Typography, Button} from '@material-ui/core'
import CoolButton from "./CoolButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  },
  button:{
    backgroundColor: "blue",
    [theme.breakpoints.up('sm')]:{
      backgroundColor: "black"
    }

  }
}));

function App() {
  const classes = useStyles()
  const theme = useTheme()
  const cool = true;
  return (
    <div className={classes.root}>
    <Button color="primary" variant="contained" className={classes.button}>
      This is a Button
    </Button>
    
    <Typography variant="h1">Hello world!</Typography>
      
    </ div>
  );
}

export default App;
