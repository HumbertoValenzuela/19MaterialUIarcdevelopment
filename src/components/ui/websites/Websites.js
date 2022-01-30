import React from 'react';
import { 
  Grid, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { 
  GridRowMainContainer 
} from '../services/estiloCustomSoftware';
import WebsitesPrimeraSeccion from './WebsitesPrimeraSeccion';
import WebsitesSegundoSeccion from './WebsitesSegundoSeccion';
import WebsitesTerceraSeccion from './WebsitesTerceraSeccion';
import WebsitesCuartaSeccion from './WebsitesCuartaSeccion';
import WebsitesQuintaSeccion from './WebsitesQuintaSeccion';
import CalltoAction from '../calltoaction/CalltoAction';


const Websites = (props) => {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>       

      <GridRowMainContainer 
        item 
        container 
        direction='row' 
        style={{marginBottom:'5em'}}
        justifyContent={matchesMD ? 'center' : undefined}
      >

        <WebsitesPrimeraSeccion  
          setValue={props.setValue} 
          setSelectedIndex={props.setSelectedIndex} 
        />  

        <GridRowMainContainer 
          item 
          container 
          direction={matchesSM ? 'column' : 'row' }
          alignItems='center'
          style={{marginTop:'5em', marginBottom:'5em'}}
        >
          <WebsitesSegundoSeccion />
        </GridRowMainContainer>

        <GridRowMainContainer 
          item 
          container 
          direction={matchesSM ? 'column' : 'row' }
          alignItems='center'
          justifyContent='flex-end'
        >
          <WebsitesTerceraSeccion />
        </GridRowMainContainer>

        <GridRowMainContainer 
          item 
          container 
          direction={matchesSM ? 'column' : 'row' }
          alignItems='center'  
          style={{marginTop:'5em', marginBottom:'5em'}}        
        >
          <WebsitesCuartaSeccion />
        </GridRowMainContainer>

        <GridRowMainContainer 
          item 
          container 
          direction={matchesSM ? 'column' : 'row' }
          alignItems='center'
          justifyContent='flex-end'
        >
          <WebsitesQuintaSeccion />
        </GridRowMainContainer>



      </GridRowMainContainer>

      <Grid item container >
          <CalltoAction setValue={props.setValue} />
        </Grid>
    </Grid>
  )
}

export default Websites
