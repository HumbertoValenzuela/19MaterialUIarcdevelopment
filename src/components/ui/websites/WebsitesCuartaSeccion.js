import React from 'react';
import { 
  Grid, 
  useMediaQuery, 
  useTheme,
  Typography 
} from '@mui/material';

// import analytics from '../../../assets/analytics.svg';

import outreach from '../../../assets/outreach.svg';


const WebsitesCuartaSeccion = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid item>
        <Grid container direction='column'>
          <Grid item >
            <Typography align='center' variant='h4' gutterBottom>Outreach</Typography>
          </Grid>
          <Grid item>
            <img 
              src={outreach} 
              alt='megaphone'             
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginLeft: matchesSM ? 0 : '1em', maxWidth: '30em'}}>
        <Typography 
          variant='body1' 
          paragraph  
          align={ matchesSM ? 'center' : undefined }        
        >
          Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them before visiting in person.
        </Typography>
  
      </Grid>
      
    </>
  )
}

export default WebsitesCuartaSeccion;
