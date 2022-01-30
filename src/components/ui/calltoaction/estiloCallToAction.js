import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import background from '../../../assets/background.jpg';
import mobileBackground from '../../../assets/mobileBackground.jpg';

export const DivCallToActionBackground = styled(Grid)( ({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  height: '60em',
  width: '100%',
  justifyContent: 'space-between', 
  alignItems: 'center',  

  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${mobileBackground})`,
    justifyContent: 'center' ,
    backgroundAttachment: 'inherit',
    // direction: 'column', 
    alignContent: 'center',
  },

}));

export const ButtonFreeEstimate = styled(Button)( ({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 50,
  height: 40,
  width: 145,
  marginRight: 20,  
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('md')]: {
    height: 30,
    width: 130,
    marginRight: 10,
    marginLeft: '3em',
    fontSize: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: '1em',
  }
}));