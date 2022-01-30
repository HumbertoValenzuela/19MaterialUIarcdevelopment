import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react'
import Lottie from 'react-lottie-player'; 
import animationData from '../../animations/landinganimation/data';
import ButtonArrow from './ButtonArrow';
import CardContent from '@mui/material/CardContent';

import { 
  ButtonFreeEstimate, 
  GridLottieTamano, 
  ButtonLearnMore, 
  SpanColorPacifico,
  ImgcustomSoftwareIcon,
  GridServiceContainer,
  GridPrimerBloque,
  GridIosAndroidContainer,
  DivRevolutionBackground,
  CardRevolution,
  DivInfoBackground,
  GridItemContacUs,  
  GridcontainerAboutContactUs,  
} from './estiloLandingPage';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import CalltoAction from '../ui/calltoaction/CalltoAction';
import { Link } from 'react-router-dom';



const LandingPage = (props) => {

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
      <Grid item>

        <Grid 
          container 
          direction='row' 
          justifyContent='flex-end'
          alignItems="center"
        >
          {/* Primera Sección */}
          <Grid sm item>
            <Typography align='center' variant='h2'>
              Bringing West Coast Technology<br />to the MidWest
            </Typography>        
          
            <Grid container justifyContent="center">
              <Grid item>
                <ButtonFreeEstimate 
                  variant="contained"
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue(0)}
                >Free Estimate
                </ButtonFreeEstimate>
              </Grid>
              <Grid item>
                <ButtonLearnMore 
                  variant="outlined"
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                <span style={{marginRight: 3}}>Learn More</span>
                  <ButtonArrow 
                    width={15} 
                    height={15} 
                    fill={theme.palette.primary.main} />
                </ButtonLearnMore>
              </Grid>
            </Grid>

          </Grid>          

          <GridLottieTamano xs item>
            <Lottie
              loop={false}
              animationData={animationData}
              play
              style={{ width: '100%', height: '100%' }}
            />
          </GridLottieTamano>
        </Grid>

      </Grid >

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

            {/*WebSites Block */}
            <Grid item>
        <GridServiceContainer container direction='row'>

          <GridPrimerBloque item >
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
        </GridServiceContainer>

      </Grid>

      {/* Revolution Card */}
      <Grid item>
        <Grid // Para el background
          container 
          justifyContent="center"
          alignItems="center"
          style={{ height: '100em', marginTop: '5em'}}          
        >
          <CardRevolution>
            <CardContent>
              <Grid container direction='column' textAlign='center' >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revolution
                  </Typography>
                  <ButtonLearnMore 
                    variant="outlined"
                    component={Link}
                    to="/revolution"
                    onClick={() => props.setValue(2)}
                  >
                  <span style={{marginRight: 3}}>Learn More</span>
                    <ButtonArrow 
                      width={15} 
                      height={15} 
                      fill={theme.palette.primary.main} />
                  </ButtonLearnMore>
                </Grid>

              </Grid>
            </CardContent>
          </CardRevolution>
          <DivRevolutionBackground>

          </DivRevolutionBackground>

        </Grid>
      </Grid>

      {/* Information Block */}
      <Grid item>
        <Grid 
          container 
          direction='row'           
          alignItems="center"
          style={{ height: '80em'}}
        >

          <GridcontainerAboutContactUs
            item
            container        
            // direction={ matchesXS ? 'column' : 'row'}
            spacing={ matchesSM ? 10 : 0 }          
          >

            <Grid 
              item 
              style={{ marginLeft: matchesSM ? 0 : '3em'}}
              lg              
            >
              <Grid 
                container 
                direction='column' 
                alignItems="center" 
                style={{ marginBottom: matchesXS ? '10em' : 0}}               
              >
                <Typography 
                  variant="h2" 
                  style={{color: 'whitesmoke'}} 
                >About Us</Typography>
                <Typography 
                  variant="subtitle2" 
                >Let's get personal.</Typography>
                <ButtonLearnMore 
                  variant="outlined"
                  component={Link}
                  to="/about"
                  onClick={() => props.setValue(3)}
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

            <GridItemContacUs 
              item                            
              lg
            >
              <Grid 
                container 
                direction='column' 
                alignItems="center"
              >
                <Typography 
                  variant="h2" 
                  style={{color: 'whitesmoke', margin: '0'}} 
                >Contact Us</Typography>
                <Typography 
                  variant="subtitle2" 
                >Say hello!. 
                <span role='img' aria-label='waving hand'>&#128075;</span>
                </Typography>
                <ButtonLearnMore 
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  onClick={() => props.setValue(4) }
                >
                <span style={{marginRight: 5}}>Learn More</span>
                <ButtonArrow 
                  width={15} 
                  height={15} 
                  fill={theme.palette.primary.main} 
                />
                </ButtonLearnMore>
              </Grid>
            </GridItemContacUs>

          </GridcontainerAboutContactUs>
          
          <DivInfoBackground />
        </Grid>
      </Grid>

      {/*  Call toAction Block*/}
      <Grid item>
        <CalltoAction setValue={ props.setValue } />
      </Grid>
    </Grid>

  )
}

export default LandingPage
