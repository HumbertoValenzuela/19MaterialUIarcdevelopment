import React from 'react';
import { 
  Grid, 
  useMediaQuery, 
  useTheme,
  Typography 
} from '@mui/material';
import analytics from '../../../assets/analytics.svg';

const WebsitesSegundoSeccion = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid item>
        <Grid container direction='column'>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>Analytics</Typography>
          </Grid>
          <Grid item>
            <img 
              src={analytics} 
              alt='graph with magnifying glass revealing 1s and 0s' 
              style={{marginLeft:'-2.75em'}}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ maxWidth: '30em' }}>
        <Typography 
          variant='body1' 
          paragraph      
          align={ matchesSM ? 'center' : undefined }    
        >
          Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal patterns and trends in your business, empowering you to make better decisions.
        </Typography>
      </Grid>
      
    </>
  )
}

export default WebsitesSegundoSeccion
