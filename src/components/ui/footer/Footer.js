import React from 'react';
import { Link } from 'react-router-dom';
import { FooterUI, GridContainer, GridItem, GridItemMargin, GridSocialContainer, ImgAdornment, ImgSocialIcon } from './styleFooter';
import footerAdornment from '../../../assets/Footer Adornment.svg';
import facebook from '../../../assets/facebook.svg';
import twitter from '../../../assets/twitter.svg';
import instagram from '../../../assets/instagram.svg';
import { Grid } from '@mui/material';

const Footer = (props) => {
    
  const { 
    // value, 
    setValue, 
    // selectedIndex, 
    setSelectedIndex 
  } = props;

  return (
    <FooterUI>
      <GridContainer container >
      {/* sx={{ display: { xs: 'none', xs: 'block'  }}} */}
        <GridItemMargin item>
          <Grid container spacing={2} direction="column">
            <GridItem 
              component={Link} 
              to='/' 
              item
              onClick={ () => setValue(0) }
            >Home</GridItem>
          </Grid>
        </GridItemMargin>

        <GridItemMargin item>
          <Grid container spacing={2} direction="column">
            <GridItem 
              component={Link} 
              to='/services' 
              item
              onClick={ () => {
                setValue(1);
                setSelectedIndex(0);
              } }
            >Services</GridItem>
            <GridItem 
              component={Link} 
              to='/customsoftware' 
              item
              onClick={ () => {
                setValue(1);
                setSelectedIndex(1);
              } }
            >Custom Software</GridItem>
            <GridItem 
              component={Link} 
              to='/mobileapps' 
              item
              onClick={ () => {
                setValue(1);
                setSelectedIndex(2);
              } }
            >iOS/Android App Development</GridItem>
            <GridItem 
              component={Link} 
              to='/websites' 
              item
              onClick={ () => {
                setValue(1);
                setSelectedIndex(3);
              } }
            >WebSite Development</GridItem>
          </Grid>
        </GridItemMargin>

        <GridItemMargin item>
          <Grid 
            container 
            spacing={2} 
            direction="column"
          >
            <GridItem 
              component={Link} 
              to='/revolution' 
              item
              onClick={ () => setValue(2) }
            >The Revolution</GridItem>
            <GridItem 
              component={Link} 
              to='/revolution' 
              item
              onClick={ () => setValue(2) }
            >Vision</GridItem>
            <GridItem 
              component={Link} 
              to='/revolution' 
              item
              onClick={ () => setValue(2) }
            >Tecnology</GridItem>
            <GridItem 
              component={Link} 
              to='/revolution' 
              item
              onClick={ () => setValue(2) }
            >Process</GridItem>
          </Grid>
        </GridItemMargin>

        <GridItemMargin item>
          <Grid container spacing={2} direction="column">
            <GridItem 
              component={Link} 
              to='/about' 
              item
              onClick={ () => setValue(3) }
            >About Us</GridItem>
            <GridItem 
              component={Link} 
              to='/about' 
              item
              onClick={ () => setValue(3) }
            >History</GridItem>
            <GridItem 
              component={Link} 
              to='/about' 
              item
              onClick={ () => setValue(3) }
            >Team</GridItem>
          </Grid>
        </GridItemMargin>

        <GridItemMargin item>
          <Grid container spacing={2} direction="column">
            <GridItem 
              component={Link} 
              to='/contact' 
              item
              onClick={ () => setValue(4) }
            >Contact Us</GridItem>
          </Grid>
        </GridItemMargin>

      </GridContainer>
      <ImgAdornment alt='black decorative slash' src={footerAdornment}/>

      <GridSocialContainer spacing={2} container>
        <GridItem 
          item 
          component={"a"}
          href="https://www.facebook.com/Humberto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImgSocialIcon alt='facebook logo' src={facebook} />
        </GridItem>
        <GridItem          
          item 
          component={"a"}
          href="https://www.twitter.com/Humberto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImgSocialIcon alt='twitter logo' src={twitter} />
        </GridItem>
        <GridItem 
          item 
          component={"a"}
          href="https://www.instagram.com/Humberto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ImgSocialIcon alt='instagram logo' src={instagram} />
        </GridItem>
      </GridSocialContainer>
    </FooterUI>
  )
}

export default Footer;
