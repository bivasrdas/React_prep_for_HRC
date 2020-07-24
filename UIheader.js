import React from 'react';
import Grid from '@material-ui/core/Grid';
import './NestedGrid.css'
import Paper from '@material-ui/core/Paper';
class UIHEADER extends React.Component{
render()
{
    return(
    <div>
        <Grid  container spacing={1}>
          <Grid item xs={4}>
          <Paper style={{backgroundColor:"#1b1f38"}}><div className="card1">ABC PRODUCTS</div></Paper>
          </Grid>
        <Grid item xs={4}>
          <Paper style={{backgroundColor:"#1b1f38"}}><div className="card1">xs=3</div></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{backgroundColor:"#1b1f38"}}><div className="card1">xs=3</div></Paper>
        </Grid>
        </Grid>
        </div>
    )
    }
}
export default UIHEADER;
