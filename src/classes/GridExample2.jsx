import React from 'react'
import {Grid} from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const GridExample2 = () =>{

    return (
        <Grid container justify="center">
            <Grid item xs={12} align="center">
                <AcUnitIcon color="primary" />
            </Grid>
            <Grid item>
                <AcUnitIcon color="secondary" />
            </Grid>
        </Grid>
    )
}

export default GridExample2