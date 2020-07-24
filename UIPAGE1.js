import React from 'react';
import Grid from '@material-ui/core/Grid';
import './NestedGrid.css'
import Paper from '@material-ui/core/Paper';
import UIHEADER from './UIheader';
import StickyHeadTable from './tables'
import { Typography, Button } from '@material-ui/core';

class NestedGrid extends React.Component{
render()
{
    return(<div style={ {backgroundColor:"#1b1f38",padding:"15px 15px 15px 15px"}} >
        <div><UIHEADER/></div>
        
        <div>
        <Grid classname="header" container spacing={2}>
          <Grid item xs={3}>
          <div className='textST'>Total Customer<div style={{color: 'white',
    fontSize: '2.7vw',
    fontWeight:"400",marginTop:"10px"}}>51</div></div>
          
        </Grid>
        <Grid item xs={3}>
          <div className="textST" >TOTAL Open AR<div style={{color: 'white',
    fontSize: '2.7vw',
    fontWeight:"400",marginTop:"10px"}}>51</div></div>
        </Grid>
        <Grid item xs={3}>
          <div className="textST">Average Days Delay<div style={{color: 'white',
    fontSize: '2.7vw',
    fontWeight:"400",marginTop:"10px"}}>51</div></div>
        </Grid>
        <Grid item xs={3}>
          <Paper className="card"><div className="textST">Total Open Invoices<div style={{color: 'white',
    fontSize: '2.7vw',
    fontWeight:"400",marginTop:"10px"}}>51</div></div></Paper>
        </Grid>
        </Grid>

        <Grid container spacing={3}>
        <Grid item xs={4}>
        <Grid container spacing={3} direction={"column"}>
        <Grid item xs={12}>
          <Paper className="stats" style={{backgroundColor:"#0000ff75"}}><div className="textST">Total Amount by Company Code</div></Paper>
          </Grid>
          <Grid item xs={12}>
          <Paper className="stats1" style={{backgroundColor:"#0000ff75"}}><div className="textST">Search Bar</div></Paper>
        </Grid>
        </Grid>
        </Grid>
        <Grid item xs={8} className='tab'>
          <Paper className="tab" style={{backgroundColor:"#0000ff75"}}><div className="textST"><span>Invoices</span><span><Button><div className="textBT">PREDICT</div></Button></span></div></Paper>
          <StickyHeadTable/>
        </Grid>
        </Grid>
        </div>
    </div>)
}
}


export default NestedGrid;