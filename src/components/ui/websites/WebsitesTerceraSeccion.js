import React from 'react';
import { 
  Grid, 
  useMediaQuery, 
  useTheme,
  Typography 
} from '@mui/material';

import ecommerce from '../../../assets/ecommerce.svg';

const WebsitesTerceraSeccion = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Grid item>
        <Grid container direction='column'>
          <Grid item >
            <Typography align='center' variant='h4' gutterBottom>E-Commerce</Typography>
          </Grid>
          <Grid item>
            <img 
              src={ecommerce} 
              alt='world outline made if dollar signs'             
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
          It's no secret that people like to shop online
        </Typography>
        <Typography 
          variant='body1' 
          paragraph
          align={ matchesSM ? 'center' : undefined }           
        >
          In 2017 over $2.3 trillion was spent in e-commerce, and it's time for your slice of that pie.
        </Typography>
      </Grid>
      
    </>
  )
}

export default WebsitesTerceraSeccion;
