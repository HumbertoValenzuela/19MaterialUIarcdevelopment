import { 
  Grid, 
  Typography, 
  // Button, 
  useTheme, 
  // useMediaQuery,
  // CardContent
} from '@mui/material';

import React from 'react'
import { Link } from 'react-router-dom'
import ButtonArrow from '../../pages/ButtonArrow'
import { ButtonLearnMore, GridIosAndroidContainer, GridPrimerBloque, GridServiceContainer, ImgcustomSoftwareIcon, SpanColorPacifico } from '../../pages/estiloLandingPage'
import customSoftwareIcon from '../../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../../assets/mobileIcon.svg';
import websiteIcon from '../../../assets/websiteIcon.svg';
import { GridServiceWebsitesBlock } from './servicesEstilo';


const Services = (props) => {

  const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='h2' align='center' gutterBottom>Services</Typography>
      </Grid>
      {/* iOS Anroid Block */}
      <Grid item>
        <GridIosAndroidContainer container direction='row'>

          <GridPrimerBloque item >
            <Typography variant="h4" >
              iOS & Android App Development
            </Typography>
            <Typography variant="subtitle1" >
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" >
              Integrate your web experience or create a standalone app
            </Typography>
            <ButtonLearnMore 
              variant="outlined"
              component={Link}
              to="/mobileapps"
              onClick={() =>{ 
                props.setValue(1); 
                props.setSelectedIndex(2)
              }}
            >
              <span style={{marginRight: 5}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
            </ButtonLearnMore>
          </GridPrimerBloque>

          <Grid item style={{ marginRight: '3em'}}>
            <ImgcustomSoftwareIcon src={mobileAppsIcon} alt="iOS/Android Icon" />
          </Grid>
        </GridIosAndroidContainer>

      </Grid>

        {/* Custom Block */}
        <Grid item>
        <GridServiceContainer container direction='row'>

          <GridPrimerBloque item >
            <Typography variant="h4" >
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" >
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" >
              Complete Digital Solutions, From Strategy to <SpanColorPacifico>Implementation</SpanColorPacifico>
            </Typography>
            <ButtonLearnMore 
              variant="outlined"
              component={Link}
              to="/customsoftware"
              onClick={() =>{ 
                props.setValue(1); 
                props.setSelectedIndex(1)
              }}
            >
              <span style={{marginRight: 5}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
            </ButtonLearnMore>
          </GridPrimerBloque>

          <Grid item>
            <ImgcustomSoftwareIcon src={customSoftwareIcon} alt="Custom Software Development Icon" />
          </Grid>
        </GridServiceContainer>

      </Grid>

            {/*WebSites Block */}
      <Grid item style={{ marginRight: '3em'}}>
        <GridServiceWebsitesBlock container direction='row'>

          <GridPrimerBloque  item>
            <Typography variant="h4" >
              WebSite Development
            </Typography>
            <Typography variant="subtitle1" >
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" >
              Optimized for Search Engines, built for speed
            </Typography>
            <ButtonLearnMore 
              variant="outlined"
              component={Link}
              to="/websites"
              onClick={() =>{ 
                props.setValue(1); 
                props.setSelectedIndex(3)
              }}
            >
              <span style={{marginRight: 5}}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.primary.main} />
            </ButtonLearnMore>
          </GridPrimerBloque>

          <Grid item >
            <ImgcustomSoftwareIcon src={websiteIcon} alt="iOS/Android Icon" />
          </Grid>
        </GridServiceWebsitesBlock>

      </Grid>
    </Grid>
  )
}

export default Services
