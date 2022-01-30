import { Grid, Typography,  useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { GridRowMainContainer } from '../services/estiloCustomSoftware';
import mockup from '../../../assets/mockupIcon.svg';
import review from '../../../assets/reviewIcon.svg';
import design from '../../../assets/designIcon.svg';
import build from '../../../assets/buildIcon.svg';
import launch from '../../../assets/launchIcon.svg';
import maintain from '../../../assets/maintainIcon.svg';
import iterate from '../../../assets/iterateIcon.svg';

const RevolutionCuartaSeccion = () => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  // const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#FF7373', height:'90em'}}
      >

        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Mockup</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}}  align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}}  align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Cutting-edge technologies will be used to make sure that your project will be delivered on time and on budget. And our experts will be available to help you with any questions you may have.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={mockup} alt='basic website design outline' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>

      {/* Quinta seccion */}
      <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#39B54A', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}> Review</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Cutting-edge technologies will be used to make sure that your project will be delivered on time and on budget. And our experts will be available to help you with any questions you may have.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={review} alt='magnifying glass' />
        </Grid>
      </GridRowMainContainer>

      {/* Sexta seccion */}
      <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#A67C52', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Design</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={design} alt='paintbrush leaving stroke of paint' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>

     {/* Septima seccion */}
     <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#39B54A', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Review</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={review} alt='magnifying glass' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>

      
     {/* Octava seccion */}
     <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#FBB03B', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Build</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={build} alt='building construcion site' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>
      
           {/* Novena seccion */}
     <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#C1272D', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Launch</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={launch} alt='rocket' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>

                {/* Decima seccion */}
     <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#8E45CE', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Maintain</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={maintain} alt='wrench tightening bolts' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>

      {/* UnDecima seccion */}
     <GridRowMainContainer 
        item 
        container 
        direction={matchesMD ? 'row' : 'column' }
        style={{backgroundColor:'#29ABE2', height:'90em'}}>
        <Grid item container direction='column' alignItems={ matchesMD ? 'center' : undefined } md>
          <Grid item>
            <Typography variant='h4' gutterBottom style={{color:'#000', marginTop:'5em'}} align={matchesMD ? 'center' : undefined}>Iterate</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Our process begins the moment you have a project in mind. Whether you already have an idea or not, we will help you to understand the problem and the solution. Our initial consultation will help us to understand your business and your needs.
            </Typography>
            <Typography variant='body1' paragraph style={{color:'#fff', maxWidth:'20em'}} align={matchesMD ? 'center' : undefined}>
              Detailed notes will be provided to you with the next steps. While taking care of the technical aspects, we will also provide you with a detailed plan of the project.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md style={{ alignSelf:'center'}}>
          <img src={iterate} alt='wrench tightening bolts' style={{ width: '100%', maxWidth: 300 }} />
        </Grid>
      </GridRowMainContainer>
    </>
  )
}

export default RevolutionCuartaSeccion
