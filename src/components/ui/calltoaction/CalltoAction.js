import React from 'react'
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import Typography from '@mui/material/Typography';
import ButtonArrow from '../../pages/ButtonArrow';
import { ButtonLearnMore } from '../../pages/estiloLandingPage';

import { ButtonFreeEstimate, DivCallToActionBackground } from './estiloCallToAction';
import { Link } from 'react-router-dom';


const CalltoAction = (props) => {

  const theme = useTheme();
  const marchesmd = theme.breakpoints.down('md');

  return (
    <DivCallToActionBackground 
      container       
      // alignItems='center'
      
      // direction={matchesSM ? 'column' : 'row'}
    >      
      <Grid 
        item 
        // position='absolute' 
        style={{
          marginLeft: marchesmd ? 0 : '3em', 
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
              justifyContent={marchesmd ? 'center' : undefined}
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

      {/* <DivCallToActionBackground /> */}
    </DivCallToActionBackground>
  )
}

export default CalltoAction;
