import React from 'react'
import { 
  Grid, 
} from '@mui/material';
import MobileAppsPrimeraSeccion from './MobileAppsPrimeraSeccion';
import MobileAppsSegundaSeccion from './MobileAppsSegundaSeccion';
import CalltoAction from '../calltoaction/CalltoAction';

const MobileApps = (props) => {

  return (
    <Grid container direction='column'>      
       
      <MobileAppsPrimeraSeccion  
        setValue={props.setValue} 
        setSelectedIndex={props.setSelectedIndex} 
      />
     
      <MobileAppsSegundaSeccion        
        setValue={props.setValue} 
        setSelectedIndex={props.setSelectedIndex} 
      />

      <Grid item style={{ margin: '0', padding: '0'}}>
        <CalltoAction setValue={ props.setValue } />
      </Grid>

    </Grid>
  )
}

export default MobileApps
