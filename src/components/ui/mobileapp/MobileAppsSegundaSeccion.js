import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Lottie from 'react-lottie-player';
import { GridRowMainContainer } from '../services/estiloCustomSoftware';
import integrationAnimation from '../../../animations/integrationAnimation/data.json';

import swiss from '../../../assets/swissKnife.svg';
import access from '../../../assets/extendAccess.svg';
import engagement from '../../../assets/increaseEngagement.svg';

const MobileAppsSegundaSeccion = (props) => {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (  
    <GridRowMainContainer 
    item 
    container     
    direction={ matchesSM ? 'column' : 'row' }
    style={{ marginTop: '8em', marginBottom: '8em' }}
    >
      <Grid item container direction='column' md >
        <Grid item>
          <Typography 
            variant='h4' 
            gutterBottom
            align={ matchesMD ? 'center' : undefined }
          >
            Integration
          </Typography>
        </Grid>
        <Grid item>
          <Typography align={ matchesMD ? 'center' : undefined } variant='body1' paragraph>
            our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
          </Typography>
          <Typography align={ matchesMD ? 'center' : undefined } variant='body1' paragraph>
            This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your than ever before.
          </Typography>
        </Grid>
      </Grid> 

      <Grid 
        item 
        md 
        container direction='column'
        alignContent='center'
      >
        <Lottie  
          loop={false}
          animationData={integrationAnimation}
          play
          style={{ maxWidth: '15em' }}
        />
      </Grid>

      <Grid item container direction='column' md>
        <Grid item>
          <Typography align={ matchesSM ? 'center' : 'right' } variant='h4' gutterBottom >
            Simultaneous Platform Support
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align={ matchesSM ? 'center' : 'right' }>
            Our cutting-edge technology allows you to build native apps for iOS and Android in a matter of hours.
          </Typography>
          <Typography variant='body1' paragraph align={ matchesSM ? 'center' : 'right' }>
            This significantly reduces the time it takes to develop and deploy your app.
          </Typography>
        </Grid>
      </Grid> 

      {/* Tercera Parte */}
      <GridRowMainContainer 
        item 
        container 
        direction={ matchesMD ? 'column' : 'row' }
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >

        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss army knife' />
          </Grid>
        </Grid>

        <Grid 
          item 
          container 
          direction='column' 
          md 
          alignItems='center'
          style={{ marginTop: matchesMD ? '10em' : 0, marginBottom: matchesMD ? '10em' : 0 }}
        >
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img 
              src={access} 
              alt='tear-one-off sign' 
              style={{ maxWidth: matchesXS ? '15em' : '20em' }} 
            />
          </Grid>
        </Grid>

        <Grid item container direction='column' md alignItems='center'>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt='app with notifications' />
          </Grid>
        </Grid>

      </GridRowMainContainer>

    </GridRowMainContainer>
  )
}

export default MobileAppsSegundaSeccion;
