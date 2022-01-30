import React from 'react';
import Lottie from 'react-lottie-player'; 
import {Link} from 'react-router-dom';  
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { IconButton, Typography, useMediaQuery } from '@mui/material';
import backArrow from '../../../assets/backArrow.svg';
import forwardArrow from '../../../assets/forwardArrow.svg';
import lightbulb from '../../../assets/bulb.svg';
import cash from '../../../assets/cash.svg';
import stopwatch from '../../../assets/stopwatch.svg';
import roots from '../../../assets/root.svg'; 
import { 
  GridArrowContainer, 
  GridHeading, 
  // GridMainContainer, 
  GridRowMainContainer 
} from './estiloCustomSoftware';
import documentsAnimation from '../../../animations/documentsAnimation/data.js';
import scaleAnimation from '../../../animations/scaleAnimation/data.json';
import automationAnimation from '../../../animations/automationAnimation/data.json';
import uxAnimation from '../../../animations/uxAnimation/data.js';
import CalltoAction from '../calltoaction/CalltoAction';


const CustomSoftware = (props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    // Primera Sección
    <Grid
      container direction='column' 
    >
      <GridRowMainContainer 
        item 
        container 
        direction='row' 
        style={{marginBottom:'5em'}}
        justifyContent={matchesMD ? 'center' : undefined}
      >

        <GridArrowContainer item >
          <IconButton
            component={Link}
            to='/services'            
            onClick={() =>{ 
              props.setValue(1); 
              props.setSelectedIndex(1)
            }}
          >
            <img src={backArrow} alt='Back to Service page' />
          </IconButton>
        </GridArrowContainer>

        <GridHeading item container direction='column'>

          <Grid item>
            <Typography align='center' variant='h2'>Custom Software Development</Typography>
          </Grid>

          <Grid item>
            <Typography variant='body1' paragraph>
              We are a custom software development company that specializes in building custom software solutions for businesses of all sizes.            
            </Typography>
            <Typography variant='body1' paragraph>
              We have a team of experienced software developers who are well versed in the latest technologies and have the ability to build custom software solutions for your business.
              
            </Typography>
            <Typography variant='body1' paragraph>
              We have a team of experienced software developers who are well versed in the latest technologies and have the ability to build custom software solutions for your business.
              
            </Typography>
          </Grid>
        </GridHeading>

        <GridArrowContainer item>
            <IconButton
              component={Link}
              to='/mobileapps'
              onClick={() =>{ 
                props.setValue(2); 
                props.setSelectedIndex(2)
              }}
            >
            <img src={forwardArrow} alt='Forward to iOS/Android App DEveleopment' />
          </IconButton>
        </GridArrowContainer>

      </GridRowMainContainer>

      {/* Segunda Sección */}
      <GridRowMainContainer 
        item 
        container 
        direction='row'
        justifyContent='center'
        style={{ marginBottom: '5em'}}
      >

        <Grid 
          item 
          container 
          direction='column' 
          md  
          style={{ maxWidth: '20em', alignItems: 'center'}}
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>

        <Grid 
          item 
          container 
          direction='column' 
          md 
          style={{ 
            maxWidth: '20em',
            alignItems: 'center',
            marginTop: matchesSM ? '5em' : 0,
            marginBottom: matchesSM ? '5em' : 0, 
          }}
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>

        <Grid 
          item 
          container 
          direction='column' 
          md 
          style={{ maxWidth: '20em', alignItems: 'center'}}
        >
          <Grid item>
            <Typography variant='h4'>Save Money </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>

      </GridRowMainContainer>


      {/* Tercera Sección */}
      <GridRowMainContainer 
        item 
        container 
        // direction='row' 
        direction={matchesMD ? 'column' : 'row'}
        justifyContent='space-between'
        alignItems={matchesMD ? 'center' : undefined}
      >
        <Grid 
          item 
          container 
          style={{ maxWidth: '35em'}}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography align={matchesSM ? 'center' : undefined } variant='h4'>Digital Documents & Data</Typography>
            </Grid>

            <Grid item>
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                Reduce Errors. Reduce Waste Costs</Typography>           
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                Billions are spent annually on data entry and data entry errors are the main cause of errors in the accounting industry.
              </Typography>           
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                By utilizing the latest technologies, we can reduce errors and reduce waste costs.
              </Typography>
            </Grid>


          </Grid>

          <Grid item md >
            <Lottie
                loop={false}
                animationData={documentsAnimation}
                play
                style={{ width: '100%', height: '100%' }}
            />
         </Grid>

        </Grid>

        {/* cuarta Sección */}
        <Grid 
          item 
          container 
          style={{ maxWidth: '35em'}}
          direction={matchesSM ? 'column' : 'row'}
          md
          
        >

          <Grid item md >
              <Lottie
                  loop={false}
                  animationData={scaleAnimation}
                  play
                  style={{ width: '100%', height: '100%' }}
              />
          </Grid>

          <Grid item container direction='column' md>

            <Grid item>
              <Typography align={matchesSM ? 'center' : 'right' } variant='h4'>Scale</Typography>
            </Grid>

            <Grid item>
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                Reduce Errors. Reduce Waste Costs</Typography>          
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                Billions are spent annually on data entry and data entry errors are the main cause of errors in the accounting industry.
              </Typography>        
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                By utilizing the latest technologies, we can reduce errors and reduce waste costs.
              </Typography>
            </Grid>

          </Grid>

       
        </Grid>
      
      </GridRowMainContainer>

      {/* Quinta Sección */}
      <Grid item container direction='row' style={{marginBottom:'5em', marginTop:'5em'}}>
        <Grid item container direction='column' alignItems='center'>

          <Grid item>
            <img 
              src={roots} 
              alt='tree with roots extending out'
              height={matchesSM ? '300em' : '450em'} 
              width={matchesSM ? '300em' : '450em'} />
          </Grid>

          <Grid item style={{ maxWidth: '35em'}}>
            <Typography variant='h4' gutterBottom align='center'>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              Many problems in the accounting industry are caused by errors in the data entry process.
            </Typography>
            <Typography variant='body1' paragraph align='center'>
              We are a custom software development company that specializes in building custom software solutions for businesses of all sizes.
            </Typography>
          </Grid>

        </Grid>
      </Grid>

      {/* Sexta Sección */}
      <GridRowMainContainer 
        item 
        container 
        // direction='row' 
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent='space-between'
      >
        <Grid 
          item 
          container 
          style={{ maxWidth: '35em'}}
          md
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography align={matchesSM ? 'center' : undefined } variant='h4'>Automation</Typography>
            </Grid>

            <Grid item>
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                Why waste time when you don't have to?</Typography>           
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                We can help you identify processes with time or event based actions which can now easily be automated.
               
              </Typography>           
              <Typography align={matchesSM ? 'center' : undefined } variant='body1' paragraph>
                Increasing efficiency increases profits, leaving you more tome to focus on your business, not busywork.
              </Typography>
            </Grid>


          </Grid>

          <Grid item md >
            <Lottie
                loop={false}
                animationData={automationAnimation}
                play
                // style={{ width: '100%', height: '100%' }}
                height={matchesSM ? '20em' : '50em'} 
                width={matchesSM ? '20em' : '50em'} 
            />
         </Grid>

        </Grid>

        {/* Septima Sección */}
        <Grid 
          item 
          container 
          style={{ maxWidth: '35em', marginBottom:'5em'}}
          md
          direction={matchesSM ? 'column' : 'row'}
          margin= { matchesSM ? 0 : 0}
        >

          <Grid item md style={{margin: 0}}>
              <Lottie
                  loop={false}
                  animationData={uxAnimation}
                  play
                  style={{ 
                    width: matchesSM ? '20em' : '50em', 
                    height: matchesSM ? '20em' : '50em', 
                    maxWidth: '40em',
                    maxHeight: '40em',
                    minHeight: 275,
                  }}
                  // height={matchesSM ? '100em' : '200em'} 
                  // width={matchesSM ? '100em' : '200em'} 
              />
          </Grid>

          <Grid item container direction='column' md>

            <Grid item>
              <Typography align={matchesSM ? 'center' : 'right' } variant='h4'>User Experience Design</Typography>
            </Grid>

            <Grid item>
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                A good design that isn't usable isn't a good design</Typography>          
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                So why are so many pieces of sotfware complicated, confusing, and frustrating?
            
              </Typography>        
              <Typography align={matchesSM ? 'center' : 'right' } variant='body1' paragraph>
                By prioritizing the user experience, we can help you create a better user experience for your customers.
              </Typography>
            </Grid>

          </Grid>

       
        </Grid>
      
      </GridRowMainContainer>

      {/* Septima Sección */}
      <Grid item>
        <CalltoAction setValue={props.setValue} />
      </Grid>
    </Grid>

   

  )
}

export default CustomSoftware;
