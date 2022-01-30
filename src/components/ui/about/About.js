import React from 'react'
import { 
  Grid, 
  Typography,  
  useMediaQuery, 
  useTheme ,
  Avatar
} from '@mui/material';
import { GridRowMainContainer } from '../services/estiloCustomSoftware';
import { GridHidden, GridHiddenLG, TypographyAboutUs } from './aboutEstilo';
import history from '../../../assets/history.svg'
import profile from '../../../assets/Profile.png'
import children from '../../../assets/children.png'
import puppy from '../../../assets/puppy.svg'
import CalltoAction from '../calltoaction/CalltoAction';

const About = (props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));
  // const matchesSM = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Grid container direction='column'>

      <GridRowMainContainer item style={{ marginTop: '2em'}}>

        <Typography variant='h4' align='center'>About Us</Typography>
        <GridRowMainContainer item container justifyContent='center'>
          <TypographyAboutUs variant='h4' align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisl
            urna aliquam eros, eget tincidunt nunc nisl eget nunc.

            Pellentesque habitant morbi tristique senectus et netus et 
          </TypographyAboutUs>
        </GridRowMainContainer>

        <GridRowMainContainer 
          item 
          container 
          justifyContent='space-around'
          direction={ matchesMD ? 'row' : 'column' }
          alignItems={ matchesMD ? undefined : 'center' }
          style={{ marginTop: '2em' }}
        >
          <Grid item md>
            <Grid item container direction='column' md style={{ maxWidth: '30em'}}>
              <Grid item>
                <Typography 
                  variant='h4' 
                  gutterBottom 
                  align={ matchesMD ? undefined : 'center' }
                >
                  History
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1' paragraph style={{fontWeight: 700, fontStyle: 'italic' }} align={ matchesMD ? undefined : 'center' }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography variant='body1' paragraph align={ matchesMD ?'center' : undefined }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
                <Typography variant='body1' paragraph align={ matchesMD ? undefined : 'center' }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
                <Typography variant='body1' paragraph align={ matchesMD ? undefined : 'center' }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item >
            <Grid item container md >
              <img src={history} alt='quill pen siting on top of book' style={{ width: '100%', maxWidth: '22em', maxHeight: '22em'}} />
            </Grid>
          </Grid>
        </GridRowMainContainer>

        {/* Team Section */}
        <GridRowMainContainer 
          item 
          container 
          justifyContent='center'
          direction='column'
          alignItems='center'
          style={{ marginTop: '2em' }}
        >
          <Grid item>
            <Typography 
              variant='h4' 
              align='center'
              gutterBottom
            >Team</Typography>
          </Grid>
          <Grid item>
            <Typography 
              variant='body1' 
              align='center'
              paragraph
            >Humberto Valenzuela, Creador</Typography>
              <Typography 
              variant='body1' 
              align='center'
              paragraph
            >I started codgin when I was 22 years old.</Typography>
          </Grid>
          <Grid item>
            <Avatar alt='creador' src={profile} style={{ width: '15em', height: '15em'}} />
          </Grid>

          <Grid item container justifyContent={ matchesMD ? undefined : 'center'}>

            <GridHiddenLG item lg >
              <Grid item style={{ padding: '1em'}}>
                <Typography variant='body1' align='center' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc.
                </Typography>
                <Typography variant='body1' align='center' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc.
                </Typography>
              </Grid>
            </GridHiddenLG>

            <Grid 
              item 
              container 
              direction='column' 
              md 
              alignItems={ matchesMD ?  undefined : 'center' }
              style={{ marginBottom: '2em' }}
            >
              <Grid item>
                <img src={children} alt='children' style={{ width: '100%', maxWidth: '20em', maxHeight: '22em'}} />
              </Grid>
              <Grid item>
                <Typography 
                variant='caption' 
                align='center'
                paragraph 
                >My children</Typography>
              </Grid>
            </Grid>

            <GridHidden item md >
              <Grid item md style={{ padding: '1em'}}>
                <Typography variant='body1' align='center' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc.
                </Typography>
                <Typography variant='body1' align='center' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Pellentesque euismod, urna eu tincidunt consectetur, nisl urna aliquam eros, eget tincidunt nunc nisl eget nunc.
                </Typography>
              </Grid>
            </GridHidden>
 

            <Grid item container direction='column' md alignItems={ matchesMD ?  'flex-end' : 'center' }>
              <Grid item>
                <img src={puppy} alt='puppy' style={{ width: '100%', maxWidth: '20em', maxHeight: '20em'}} />
              </Grid>
              <Grid item>
                <Typography variant='caption' align='center' paragraph>
                  a cute puppy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
     
        </GridRowMainContainer>

      </GridRowMainContainer>

      <Grid item>
        <CalltoAction setValue={props.setValue} />
      </Grid>
    </Grid>
  )
}

export default About
