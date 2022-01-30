import React from 'react';
import { 
  Link ,
} from "react-router-dom";
import { 
  // AppBar,  
  Toolbar,
  
} from '@mui/material';

import ElevationScroll from './helpers/ElevationScroll';
import logo from '../../assets/logo.svg';
import { 
  Offset, 
  TamanaDeLogo, 
   
  HeaderButtonLogo,
  AppBarPosicion
} from './theme/headerEstilos';
import HeaderTabs from './helpers/HeaderTabs';

const Header = (props) => {    
  
  const { 
    value, 
    setValue, 
    selectedIndex, 
    setSelectedIndex 
  } = props;

  return (
    <>
    <ElevationScroll>
    
      <AppBarPosicion position="fixed" >
        <Toolbar disableGutters={true}   >
          <HeaderButtonLogo component={Link} to='/' disableRipple >
            <TamanaDeLogo src={logo} alt="logo" />
          </HeaderButtonLogo>

          <HeaderTabs           
            value={value} 
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex} 
          />


        </Toolbar>
      </AppBarPosicion>    
    </ElevationScroll>
    {/* <UseStyles  /> */}
    <Offset />
    </>
  )
}

export default Header;

