import { Grid, Typography,  useMediaQuery, useTheme} from '@mui/material'
import React from 'react'
import { GridRowMainContainer } from '../services/estiloCustomSoftware';
import RevolutionPrimeraSeccion from './RevolutionPrimeraSeccion';
import RevolutionSegundaSecion from './RevolutionSegundaSecion';
import RevolutionTerceraSeccion from './RevolutionTerceraSeccion';

import RevolutionCuartaSeccion from './RevolutionCuartaSeccion';



const Revolution = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  // const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container direction='column'>
      <GridRowMainContainer item>
        <Typography 
          variant='h2'
          style={{ fontFamily:'Pacifico'}}
          align={ matchesMD ? 'center' : undefined}
        >Revolution
        </Typography>
      </GridRowMainContainer>

      <GridRowMainContainer 
        item
        container
        direction={matchesMD ? 'row' : 'column'}
        alignItems='center'
        style={{marginTop:'5em'}}
      >
        <RevolutionPrimeraSeccion /> 
      </GridRowMainContainer>

      
      <Grid 
        item
        container
        direction={matchesMD ? 'row' : 'column'}
        alignItems='center'
        style={{marginTop:'10em', marginBottom:'10em'}}
      >
        <RevolutionSegundaSecion />
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'row' : 'column'}       
        justifyContent='center'
      >
        <RevolutionTerceraSeccion />
        <RevolutionCuartaSeccion />
      </Grid>

    </Grid>
  )
}

export default Revolution
