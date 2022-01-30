import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const GridHeading = styled(Grid) ( ({ theme }) => ({
  width: '40em',
}));

export const GridArrowContainer = styled(Grid) ( ({ theme }) => ({
  marginTop: '0.5em',
  // marginRight: '1em',
  // marginLeft: '1em',
  
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const GridMainContainer = styled(Grid) ( ({ theme }) => ({
  paddingLeft: '3em',
  paddingRight: '3em',
  // paddingTop: '2em',
  // paddingBottom: '5em',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '1em',
    paddingRight: '1em',
    // paddingBottom: '1em',
    width: '100%',
  },
}));

export const GridRowMainContainer = styled(Grid) ( ({ theme }) => ({
  paddingLeft: '3em',
  paddingRight: '3em',
 
  [theme.breakpoints.down('md')]: {
    paddingLeft: '1em',
    paddingRight: '1em',    
    width: '100%',
  },

  [theme.breakpoints.down('xs')]: {
    marginTop: '1em',
    padding: 0,
  },

  

}));


