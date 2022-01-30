import React, { Fragment, useEffect, useState } from 'react';
import { Link ,
  //  matchPath, 
  //  useLocation
  } from "react-router-dom";
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// estilo general
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AntTab, AntTabs, StyledMenu, HeaderButtonFreeSelect } from '../theme/headerEstilos';
import { Drawer } from './HeaderDrawer';

// function useRouteMatch(patterns) {
//   const { pathname } = useLocation();
//   for (let i = 0; i < patterns.length; i += 1) {
//     const pattern = patterns[i];
//     const possibleMatch = matchPath(pattern, pathname);
//     if (possibleMatch !== null) {
//       return possibleMatch;
//     }
//   }
//   return null;
// }

  // refactorizar MenuItems
  const menuOptions = [
    { name: 'Services', 
      link: '/services', 
      activeIndex: 1, 
      selectedIndex: 0 
    },
    { name: 'Custom Software Development', 
      link: '/customsoftware', 
      activeIndex: 1, 
      selectedIndex: 1 
    },
    { name: 'iOS/Android App Development', 
    link: '/mobileapps', 
    activeIndex: 1, 
    selectedIndex: 2 
    },
    { name: 'WebSite Development', 
      link: '/websites', 
      activeIndex: 1, 
      selectedIndex: 3 
    },
  ];

const HeaderTabs = (props) => {
  
  const { 
    value, 
    setValue, 
    selectedIndex, 
    setSelectedIndex 
  } = props;

  // Responsive
  const theme = useTheme();
  // Seleccion inferior md devuelve true
  const matches = useMediaQuery( theme.breakpoints.down('md') );
 
  // // tabs 0,1,2,3,4,5
  // const [value, setValue] = useState(0);
  // // --------------------------------------------------
  // // menuItems
  // const [selectedIndex, setSelectedIndex] = useState( 0 );
  // Tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  // const routeMatch = useRouteMatch(
  //   ['/', 
  //    '/services', 
  //   '/revolution', '/about', '/contact'  ]);
  // const currentTab = routeMatch?.pattern?.path;

  // Menu menuItems
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  // const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  // --------------------------------------------------

  const handleMenuItemClick = ( event, index ) => {
    setAnchorEl(null);
    setOpenMenu(false);
    // pasar el indice seleccionado en el indice del elemento del menú en el que se hizo click
    setSelectedIndex( index );
  };

  const arrayRoutes = [
    {name: 'Home', link: '/', activeIndex: 0 },
    {name: 'Services', 
    link: '/services', 
    activeIndex: 1,
    ariaOwns:  `${anchorEl} ? 'simple-menu' : undefined`,
    ariaPopup: `${anchorEl} ? 'true' : undefined`,
    mouseOver: event => handleClick(event),    
  },
    {name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    {name: 'About Us', link: '/about', activeIndex: 3 },
    {name: 'Contact Us', link: '/contact', activeIndex: 4 },
    
  ];


// console.log(arrayRoutes)
  useEffect(() => {  

    // function menuOptionsroutes() {
      [...menuOptions, ...arrayRoutes].forEach( ( route ) => {
        switch ( window.location.pathname) {
          case `${route.link}`:
            // Si nuestro valor actual no es igual a nuestro indice activo current route
            if ( value !== route.activeIndex ) {
              setValue( route.activeIndex);
              // console.log(route.link)
              // Si route.selectedIndex existe(&& sino esta undefined) y route.selectedIndex no es igual al indice seleccionado. entonces
              if ( route.selectedIndex && route.selectedIndex !== selectedIndex ) {
                setSelectedIndex( route.selectedIndex );
              }
            }          
          break;
          case '/estimate':
            setValue(0);
          break;

            
          default:
          break;
        }
      });
    // }

    // menuOptionsroutes();
    
      // eslint-disable-next-line    
  }, [value,selectedIndex ]);

  const tabs = (

    <Fragment>
      <AntTabs 
        value={value}            
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
      > 
      {
        arrayRoutes.map( ( route, index ) => (
          <AntTab 
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            key={`${route.link}${index}`}
            component={Link} 
            to={route.link}
            label={route.name}
            onMouseOver={route.mouseOver}
          />
        ))
      }


    </AntTabs>
    <StyledMenu      
      id="simple-menu"
      anchorEl={anchorEl}      
      open={openMenu}
      onClose={handleClose}      
      MenuListProps={{        
        onMouseLeave: handleClose,
        // 'aria-labelledby': 'simple-menu',
      }}
      // classes={ { paper: clasemenu } }
      // Asegurar que todos los elementos del menú esten siempre montados en el DOM independientemente de si no estan visibles en la pantalla, lo que hará que esto sea un poco mejor para la búsqueda optimazación del motor que siempre podrá encontrar que pestañas tenemos en nuestro sitio web
      keepMounted
      style={{zIndex: 1301}}
    >
      {
        menuOptions.map( ( option, index ) => (
          <MenuItem
            key={`${option.link}${option.activeIndex}`}
            component={Link}
            to={option.link}
            // Tomar la propiedad de evento 
            onClick={ event => { 
              handleMenuItemClick( event, index );
              setValue( 1 );
              handleClose(); 
            } }
            selected= { selectedIndex === index && value === 1 }
          >
            { option.name }
          </MenuItem>
        ))
      }
     
   
    </StyledMenu>
    <HeaderButtonFreeSelect 
      variant="contained" 
      color='secondary' 
      component={Link} 
      to="/estimate"
      onClick={ () => props.setValue(0) }
    >
            Free Estimate
          </HeaderButtonFreeSelect>
    </Fragment>
  );

 

  return (
    <>
      {
        matches 
        ? <Drawer value={value} setValue={setValue} /> 
        : tabs
      }
  
    </>
  )
}

export default HeaderTabs


