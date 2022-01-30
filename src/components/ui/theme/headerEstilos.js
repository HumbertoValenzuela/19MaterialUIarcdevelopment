import {    
  styled, 
  // alpha 
} from '@mui/system';
import Menu from '@mui/material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { AppBar, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material";
// import ListItemButton from '@mui/material/ListItemButton';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


// Funciona pero no Reponsive
// const UseStyles = styled('div')(({ theme }) => ({  
//   marginTop: theme.mixins.toolbar.minHeight  
// }));

// fixed no afecta la dimensión de la página. Una parte del contenido queda debajo de la barra de navegación.
// Solución: crear theme.mixins.toolbar. Para que ocupe el espacio.
export const Offset = styled('div')( ({ theme }) => ({
  minHeight: theme.mixins.toolbar,
  marginBottom: "7rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "6rem",
  } ,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "5rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginBottom: "4rem",
  }  
}));

export const TamanaDeLogo = styled('img')(({ theme }) => ({
  height: "7em",  
  [theme.breakpoints.down("md")]: {
    height: "6em",
  } ,
  [theme.breakpoints.down("sm")]: {
    height: "5em",
  },
  [theme.breakpoints.down("xs")]: {
    height: "4em",
  }    
}) );

export const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  marginLeft: 'auto',
  // '& .MuiTabs-indicator': {
    // backgroundColor: '#1890ff',
  // },
});

export const AntTab = styled(Tab)({
  color: '#fff',
  fontFamily: 'Raleway',
  textTransform: 'none',
  fontWeight: '700',
  fontSize: '0.8rem',
  minWidth: 10,
  marginLeft: '25px',
});

export const HeaderButtonFreeSelect = styled(Button)({
  borderRadius: '50px',
  marginLeft: '50px',
  marginRight: '25px',
  fontFamily: 'Pacifico',
  fontSize: '0.8rem',
  textTransform: 'none',
  height: '45px',
  color: '#fff',
});

export const HeaderButtonLogo = styled(Button)({
  padding: 0,
  // "&:hover": {
  //   backgroundColor: 'transparent',
  // }  
});

export const StyledMenu = styled((props) => (
  <Menu
    elevation={1}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    
  },
  '& .MuiMenuItem-root': {
    fontFamily: 'Raleway',
    color: theme.palette.primary.contrastText,
    textTransform: 'none',
    fontWeight: '700',
    fontSize: '0.8rem',
    // opacity: 0.7,
    '&:hover': {
    opacity: 0.7,
    backgroundColor: theme.palette.secondary.main,
    
    },
  },
}) );

export const DrawerIconContainer = styled(IconButton)({
  marginLeft: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  }
});

export const DrawerIcon = styled(MenuIcon)({
  fontSize: 40,
  color: '#fff',
});

export const SwipeableDrawerIzquierdo = styled(SwipeableDrawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText, 
    selectedOpacity: 0.99,
  },  
}) );


export const ListItemTexDrawerItems = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: '700',
    fontSize: '0.8rem',
    opacity: 0.7,
  },  
}) );

export const ListItemTexDrawerItemsSelected = styled(ListItemText)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    opacity: 1,    
  },  
}) );

export const ListItemEstimate = styled(ListItem)({
    backgroundColor: '#FFBA60',  
});

export const ListItemButtonestilo = styled(ListItemButton)({
  backgroundColor: '#0B72B9', 
});

export const AppBarPosicion = styled(AppBar)(({ theme }) => ({  
  zIndex: theme.zIndex.modal + 1
}) );



