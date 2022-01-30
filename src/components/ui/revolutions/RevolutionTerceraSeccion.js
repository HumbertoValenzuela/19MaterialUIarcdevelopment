import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { GridRowMainContainer } from '../services/estiloCustomSoftware';
import consultation from '../../../assets/consultationIcon.svg'

const RevolutionTerceraSeccion = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  // const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid item>
        <Typography variant='h4' gutterBottom align={matchesMD ? 'center' : undefined}>
          Process
        </Typography>
      </Grid>
      <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#b3b3b3', height:'60em'}}
      >

        <Grid item container direction='column' lg alignItems={ matchesMD ? 'center' : undefined }>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} >Consultation</Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Cutting-edge technologies will be used to make sure that your project will be delivered on time and on budget. And our experts will be available to help you with any questions you may have.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf:'center'}}>
          <img src={consultation} alt='handshake'  style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>
      
    </>
  )
}

export default RevolutionTerceraSeccion
