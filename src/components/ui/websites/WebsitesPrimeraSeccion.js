import React from 'react'
import { 
  Grid, 
  IconButton, 
  Typography, 
  // useMediaQuery, 
  // useTheme 
} from '@mui/material';
import { Link } from 'react-router-dom';

import { 
  GridArrowContainer, 
  GridHeading, 
  // GridRowMainContainer 
} from '../services/estiloCustomSoftware';
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';

const WebsitesPrimeraSeccion = (props) => {

  // const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <GridArrowContainer item >
        <IconButton
          component={Link}
          to='/mobileapps'            
          onClick={() =>{ 
            props.setValue(2); 
            props.setSelectedIndex(2)
          }}
        >
          <img src={backArrow} alt='Back to iOS/Android Development page' />
        </IconButton>
      </GridArrowContainer>

      <GridHeading item container direction='column'>

        <Grid item>
          <Typography align='center' variant='h2'>Websites Development</Typography>
        </Grid>

        <Grid item>
          <Typography variant='body1' paragraph>
            Having a website is a necessity for any business world. They give you one central, public location to let people know who you are. what you do, and why you're the best at it.            
          </Typography>
          <Typography variant='body1' paragraph>
            From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drivers growth and enables you to reach new customers.            
          </Typography>
   
        </Grid>
      </GridHeading>

      <GridArrowContainer item >
          <IconButton
            component={Link}
            to='/services'            
            onClick={() =>{ 
              props.setValue(1); 
              props.setSelectedIndex(1)
            }}
          >
            <img src={forwardArrow} alt='Back to Service page' />
          </IconButton>
        </GridArrowContainer>
    </>
  )
}

export default WebsitesPrimeraSeccion
