import React from 'react'
import { Grid, Typography,  useMediaQuery, useTheme } from '@mui/material'
import vision from '../../../assets/vision.svg';

const RevolutionPrimeraSeccion = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid item lg>
        <img 
          src={vision} 
          alt='mountain through binoculars' 
          style={{ 
            maxWidth: matchesSM ? '40em' : 250, marginRight: matchesMD ? 0 : '5em', marginBottom: matchesMD ? '5em' : 0 }} />
      </Grid>

      <Grid 
        item
        container
        direction='column'
        lg
        style={{ maxWidth:'40em'}}
      >
        <Grid item>
          <Typography variant='h4' gutterBottom align={matchesMD ? 'center' : 'right'}>Vision</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : 'right'}>
            The rise of computers, and subsequently the Internet, has changed the way we interact with our world. This has increased the complexity of our lives, and has made it easier to find information, and to communicate with others.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : 'right'}>
            What once was confined to a computer has now become a global platform, and it is now possible to access information from anywhere, anytime, and from any device.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : 'right'}>
            By holding ourselves to rigorous standards, we can ensure that our information is secure, and that we can communicate with others in a way that is easy to understand.
          </Typography>
          <Typography variant='body1' paragraph align={matchesMD ? 'center' : 'right'}>
            We see a future every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them to achieve their goals.
          </Typography>       
        </Grid>
      </Grid>      
    </>
  )
}

export default RevolutionPrimeraSeccion
