import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ButtonArrow from '../../pages/ButtonArrow'
import { ButtonFreeEstimate, ButtonLearnMore } from '../../pages/estiloLandingPage'

const ContactTerceraSeccion = (props) => {

  const theme = useTheme();
  const matchesmd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Grid 
        item 
        // position='absolute' 
        style={{
          marginLeft: matchesmd ? 0 : '3em', 
          textAlign: 'center'
        }} 
      >        
        <Grid container direction='column'>   

          <Grid item>
            <Typography variant='h2' align='center'>
              Simple Software.<br /> Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' align='center'>
              Take advantage of the 21st Century.
            </Typography>

            <Grid 
              container 
              item
              justifyContent={matchesmd ? 'center' : undefined}
            >
              <ButtonLearnMore 
                variant="outlined"
                component={Link}
                to='/revolution'
                onClick={() => props.setValue(2) }
              >
                  <span style={{marginRight: 5}}>Learn More</span>
                  <ButtonArrow 
                    width={15} 
                    height={15} 
                    fill={theme.palette.primary.main} 
                  />
              </ButtonLearnMore>
            </Grid>

          </Grid>
          
        </Grid>
      </Grid>

      <Grid 
        item 
        // style={{position: 'absolute'}}
      >
        <ButtonFreeEstimate
          variant='contained'
          component={Link}
          to='/estimate'
          onClick={() => props.setValue(0) }
        >Free Estimate</ButtonFreeEstimate>
      </Grid> 
    </>
  )
}

export default ContactTerceraSeccion
