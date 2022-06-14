import * as React from 'react';
import { useState } from 'react';
import {Paper,Zoom,Container,Box,TextField,Typography, Autocomplete} from '@mui/material';
import Appbaar from "../appbar";
import {Grid} from '@mui/material';
import Sidebar from '../sidebar/sidebar';
import {AiFillHome} from "react-icons/ai";







export default function Dashboard() {

   
    const [region,setRegion] = useState([
        {name:"East"},
        {name:"West"},
        {name:"North"},
        {name:"South"}
        ]);

    const [regionValue,setRegionValue] = useState("");
 

    const [hub,setHub] = useState([
        {name:"Delhi"},
        {name:"Gurgaon"},
        {name:"Noida"},
        {name:"Rajasthan"}
        ]);

    const [hubValue,setHubValue] = useState("");
 
    return (
        <React.Fragment>
         
    <Grid container xs={12}>

       { 
        <Grid xs={2} >
            
        {/* <Sidebar/> */}
        </Grid>}



        <Grid xs={10}>

        <Grid container xs={12} style={{marginTop:"16px",marginLeft:"6px"}}>

            <AiFillHome size={15}/>
            <Typography style={{marginBottom:"4px",fontSize:"12px"}}>&nbsp; Home / &nbsp; Inventory Dashboard</Typography>
        </Grid>

        <Grid container xs={12}>

            <Grid xs={8}>

                <Typography style={{marginTop:"26px",fontSize:"18px",fontWeight:"bold",marginLeft:"10px"}}>
                    Inventory Dashboard
                </Typography>
            </Grid>

                <Grid xs={2}>
               
                <Typography   style={{marginTop:"16px",fontSize:"18px",fontWeight:"bold",padding:"6px"}}>
                <Autocomplete id='header'
                getOptionLabel={(region) => region.name}
       
        options={region || []}
        getOptionSelected={(option, value) => option.name === value.name}
        
        onChange={(event, newValue) => setRegionValue(newValue)}
        renderInput={(params) =>
          <TextField
            {...params}
            variant="outlined"
            margin='dense'
            
            placeholder='Select Region'
            
          />
        }
      />

                </Typography>
                
            </Grid>
            <Grid xs={2}>
               
               <Typography   style={{marginTop:"16px",fontSize:"18px",fontWeight:"bold",padding:"6px",marginRight:"14px"}}>
               <Autocomplete id='header'
               getOptionLabel={(hub) => hub.name}
       
       options={regionValue && hub || []}
       getOptionSelected={(option, value) => option.name === value.name}
       
       onChange={(event, newValue) => setHubValue(newValue)}
       renderInput={(params) =>
         <TextField
           {...params}
           variant='outlined'
           margin='dense'
           color="primary"

           placeholder='Select hub'
           
         />
       }
     />


               </Typography>
               
           </Grid>

        </Grid>


      <Container>
      <Box sx={{ my: 2 }}>

      
       
      <Paper elevation={3} style={{marginTop:"20px"}}>
        <Grid container xs={12}>
            <Grid xs={4}>
                <Typography>
                    graph 1
                </Typography>

            </Grid>
            <Grid xs={4}>
                <Typography>
                    graph 2
                </Typography>
            </Grid>

            <Grid xs={4}>
                <Typography>
                    graph 3
                </Typography>
            </Grid>

        </Grid>

      </Paper>

         
    </Box>
    </Container>
    </Grid>
    </Grid>
     
    </React.Fragment>
  );
}
