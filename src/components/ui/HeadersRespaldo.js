import React from 'react';
import { Link , matchPath, useLocation} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AntTab, AntTabs } from '../theme/headerEstilos';

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

const HeaderTabs = () => {
  
  const routeMatch = useRouteMatch(
    ['/', 
     '/services', 
    '/revolution', '/about', '/contact'  ]);
  const currentTab = routeMatch?.pattern?.path;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <AntTabs 
    value={currentTab}            
    textColor="secondary"
    indicatorColor="secondary"
    > 
      <AntTab 
        value= "/" 
        label="Home" 
        to="/"
        component={Link}
      />
      <AntTab 
        value="/services" 
        label="Services" 
        to="/services"
        component={Link}

        id="basic-tab"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />
      <AntTab 
        value="/revolution" 
        label="The Revolution" 
        to="/revolution"
        component={Link}
      />
      <AntTab 
        value="/about" 
        label="About us" 
        to="/about"
        component={Link}
      />
      <AntTab 
        value="/contact" 
        label="Contact Us" 
        to="/contact"
        component={Link}
      />
    </AntTabs>
    <Menu      
      id="basic-menu"
      anchorEl={anchorEl}      
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem  onClick={handleClose}>
        <Link to="/customsoftware">Custom Software</Link>
      </MenuItem>
   
    </Menu>
  
  </>
  )
}

export default HeaderTabs


