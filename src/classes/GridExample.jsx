import React from "react";
import { Grid, Divider } from "@material-ui/core";

const GridExample = () => {
  return (
    <div>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            Welcome Omar
          </Grid>
          <Grid item xs={8} />

          <Grid item xs={2}>
            Logout
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi at
            quia ducimus, id nesciunt quo eveniet eaque reprehenderit. Optio
            perferendis id repellat! Omnis non dolorum beatae ex laboriosam cum
            perspiciatis?
          </Grid>
          <Grid item xs={6}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi at
            quia ducimus, id nesciunt quo eveniet eaque reprehenderit. Optio
            perferendis id repellat! Omnis non dolorum beatae ex laboriosam cum
            perspiciatis?
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridExample;
