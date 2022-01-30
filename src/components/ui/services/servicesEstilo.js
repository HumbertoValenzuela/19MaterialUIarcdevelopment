import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const GridServiceWebsitesBlock = styled(Grid) ( ({ theme }) => ({
  marginTop: '5em',
  
  // marginRight: '3em', 
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    textAlign: 'center',
    // marginRight: 0,
  }
}));