import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

// DataDisplay - List
import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

import { DrawerIcon, DrawerIconContainer, ListItemEstimate, ListItemTexDrawerItems, SwipeableDrawerIzquierdo,  ListItemTexDrawerItemsSelected, Offset } from "../theme/headerEstilos";
import { ListItemButton } from "@mui/material";

export const Drawer = (props) => {

  const { value, setValue } = props;

  // const [value, setValue] = useState(0);
   // --------------------------------------------------
  // Drawer
  // iOS tiene una función de "deslizar para volver" que interfiere con la función de descubrimiento, por lo que se deshabilita
  const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  //----------------------------------------------------- 
  const arrayRoutes = [
    {name: 'Home', link: '/', activeIndex: 0 },
    {name: 'Services', 
    link: '/services', 
    activeIndex: 1,  
    },
    {name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    {name: 'About Us', link: '/about', activeIndex: 3 },
    {name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ];
  return (

    <Fragment>
      <DrawerIconContainer 
        // size="large"
        onClick={ () => setOpenDrawer( !openDrawer) } 
      >
        <DrawerIcon 
          // fontSize="inherit"
        />
      </DrawerIconContainer>

      <SwipeableDrawerIzquierdo 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS} 
        // Si esta visible
        open={ openDrawer }
        onClose={ () => setOpenDrawer(false) }
        onOpen={ () => setOpenDrawer(true) }
      >
        <Offset> </Offset>
        <List disablePadding >

          {
            arrayRoutes.map( route => (
              <ListItemButton
                key={`${route}${route.activeIndex}`}
                onClick={ () => {
                  setOpenDrawer(false); setValue(route.activeIndex);
                } }
                divider
                component={Link}
                to={route.link}
                selected={ value === route.activeIndex }

              >
                {
                 value === route.activeIndex 
                  ? <ListItemTexDrawerItemsSelected>{route.name}
                    </ListItemTexDrawerItemsSelected>
                  : <ListItemTexDrawerItems >{route.name}
                    </ListItemTexDrawerItems>
                }
              </ListItemButton>

            ))
          }    

          <ListItemEstimate
            component={Link}
            to='/estimate'
            divider button
            onClick={ () => {setOpenDrawer(false); setValue(5);} }  
            selected={ value === 5 }
          >
          {
            value === 5 
              ? <ListItemTexDrawerItemsSelected>Estimate
                </ListItemTexDrawerItemsSelected>
              : <ListItemTexDrawerItems >Estimate
                </ListItemTexDrawerItems>
          }
          </ListItemEstimate>

        </List>
      </SwipeableDrawerIzquierdo>

    </Fragment>
  )
}
