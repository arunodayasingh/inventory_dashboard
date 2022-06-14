import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Grid} from '@mui/material';
import "./feedback.css";
import Sidebar from './sidebar/sidebar';

const AppBaar = () => {
  return (
    <React.Fragment>
              
      <AppBar style={{background:"linear-gradient(90deg, rgba(83,63,208,1) 0%, rgba(130,18,183,1) 100%)"}}>
        <Toolbar>
          <Grid container  xs={12}>

                <Grid xs={12}>


                </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
     
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  )
}

export default AppBaar;