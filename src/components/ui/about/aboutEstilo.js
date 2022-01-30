import { Typography, Grid } from '@mui/material';
import {    
  styled, 
  // alpha 
} from '@mui/system';

export const TypographyAboutUs = styled(Typography)({
  fontStyle: 'italic',  
  fontFamily: 'Pacifico',
  fontSize: '1.5rem',
  fontWeight: '400',
  maxWidth: '40em',
  lineHeight: '1.3',
});

export const GridHidden = styled(Grid) ( ({ theme }) => ({

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },  

}));

export const GridHiddenLG = styled(Grid) ( ({ theme }) => ({
 

  // El orden es importante
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  }, 
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  }, 
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }, 
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },  
}));

  
  
