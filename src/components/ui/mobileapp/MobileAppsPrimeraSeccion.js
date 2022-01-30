import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import { GridArrowContainer, GridHeading, GridRowMainContainer } from '../services/estiloCustomSoftware';
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';

const MobileAppsPrimeraSeccion = (props) => {
  
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <GridRowMainContainer 
      item 
      container 
      direction='row' 
      style={{marginBottom:'5em'}}
      justifyContent={matchesMD ? 'center' : undefined}
    >

      <GridArrowContainer item >
        <IconButton
          component={Link}
          to='/customsoftware'            
          onClick={() =>{ 
            props.setValue(1); 
            props.setSelectedIndex(1)
          }}
        >
          <img src={backArrow} alt='Back to Custom Software Development page' />
        </IconButton>
      </GridArrowContainer>

      <GridHeading item container direction='column'>

        <Grid item>
          <Typography align='center' variant='h2'>iOS/Android App Development</Typography>
        </Grid>

        <Grid item>
          <Typography variant='body1' paragraph>
            Mobile apps allow you to toke your tools on the go          
          </Typography>
          <Typography variant='body1' paragraph>
            Whether you want an app for your customers, employees, or yourself, we can buils cross-platform native solutions for any part of your business process. this opens you up to a while new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.              
          </Typography>
          <Typography variant='body1' paragraph>
            Convenience. Connection.
            
          </Typography>
        </Grid>
      </GridHeading>

      <GridArrowContainer item>
          <IconButton
            component={Link}
            to='/websites'
            onClick={() =>{ 
              props.setValue(1); 
              props.setSelectedIndex(3)
            }}
          >
          <img src={forwardArrow} alt='Forward to WbSite Development Page' />
        </IconButton>
      </GridArrowContainer>

    </GridRowMainContainer>
  )
}

export default MobileAppsPrimeraSeccion
