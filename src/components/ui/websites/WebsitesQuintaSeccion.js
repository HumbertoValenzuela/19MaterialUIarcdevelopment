import React from 'react';
import { 
  Grid, 
  useMediaQuery, 
  useTheme,
  Typography 
} from '@mui/material';
import seo from '../../../assets/seo.svg';

const WebsitesQuintaSeccion = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
    <Grid item>
      <Grid container direction='column'>
        <Grid item >
          <Typography align='center' variant='h4' gutterBottom>Search Engine <br /> Optimization</Typography>
        </Grid>
        <Grid item>
          <img 
            src={seo} 
            alt='website standing on winner podiun'             
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
        How often have you ever been to the second page of Google results?
      </Typography>
      <Typography 
        variant='body1' 
        paragraph  
        align={ matchesSM ? 'center' : undefined }       
      >
        If you're like us, probably never.
      </Typography>
      <Typography 
        variant='body1' 
        paragraph    
        align={ matchesSM ? 'center' : undefined }      
      >
        Customers don't go there either, so we make sure your website is designed to end up on top.
      </Typography>
    </Grid>
    
  </>
  )
}

export default WebsitesQuintaSeccion
