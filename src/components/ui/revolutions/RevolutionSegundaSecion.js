import { Grid, Typography,  useMediaQuery, useTheme } from '@mui/material'
import React from 'react';

import Lottie from 'react-lottie-player';
import technologyAnimation from '../../../animations/technologyAnimation/data.json';

const RevolutionSegundaSecion = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Grid 
        item
        container
        direction='column'
        lg
        style={{ maxWidth:'40em'}}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom align={matchesMD ? 'center' : undefined}>Technology</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align={ matchesMD ? 'center' : undefined }>
            In 2013, Facebook invented a new of building websites. This new system, React.js, completely revolutionizes the process and practice of websites development.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
            Instead of chaning together long individual pages, like traditional websites, React.js allows us to create a single page application, which is much more efficient and easier to maintain.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
            Two years later they shocked the world by releasing s similar system, React Native, for producing iOs and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly. This was a huge leao forward.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
            This Technology is now being used by companies like AirBnB, Microsoft, NetFlix, Pinterest, Skype, Tesla, UberEats, and when Facebook purschased Instagram large portions of it were even rebuilt using React.
          </Typography>    
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
            Two years later they shocked the world by releasing s similar system, React Native, for producing iOs and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly. This was a huge leao forward.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : undefined}>
            This puts personalization in your pocket - faster, better, and more affordable than ever before.
          </Typography>      
        </Grid> 
      </Grid>

      <Grid 
        item 
        container 
        lg 
        justifyContent={matchesMD ? 'center' : 'flex-end' }
      >
        <Lottie
          loop={false}
          animationData={technologyAnimation}
          play
          style={{ width: '100%', maxWidth: '30em', margin: 0 }}
        />
      </Grid>
      
    </>
  )
}

export default RevolutionSegundaSecion
