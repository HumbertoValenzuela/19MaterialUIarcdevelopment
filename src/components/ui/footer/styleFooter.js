import { Grid } from '@mui/material';
import { styled} from '@mui/system';

export const FooterUI = styled('footer')( ({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '100%',
  // la parte azul queda pequeña
  // height: '5rem',
  // Footer zIndex sobre Drawer
  zIndex: theme.zIndex.drawer + 1,
  // No funciona el zIndex, porque debe ir explicitamente el position: 'relative' 
  position: 'relative',
}));

export const ImgAdornment = styled('img') ( ({ theme }) => ({
  width: '18em',
  // Cambiar en que parte de la imagen está anclada a la pantalla
  verticalAlign: 'bottom',  
  [theme.breakpoints.down('md')]: {
    width: '10em',
  },
  [theme.breakpoints.down('xs')]: {
    width: '7em',
  },
  
}));

export const GridContainer = styled(Grid) ( ({ theme }) => ({
  position: 'absolute',
  justifyContent: 'center',  
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  // [theme.breakpoints.down('xs')]: {
  //   display: 'block'
  // },
}));

export const GridItem = styled(Grid) ( ({ theme }) => ({
  color: '#fff',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  fontFamily: 'Arial',
}));

export const GridItemMargin = styled(Grid) ( ({ theme }) => ({
  margin: '1.5rem',
}));

export const ImgSocialIcon = styled('img') ( ({ theme }) => ({
  width: '3em',
  height: '3em',
  [theme.breakpoints.down('xs')]: {
    height: '2em',
    width: '2em',
  },  
}));

export const GridSocialContainer = styled(Grid) ( ({ theme }) => ({
  // desaparece el .svg
  position: 'absolute',
  // para que aparezcan los iconos.
  marginTop: '-4em',
  right: '1.5em',
  // Pero no se muestran correctamente. justify para mandar a la derecha
  justifyContent: 'flex-end',
  [theme.breakpoints.down('xs')]: {
    marginTop: '-3em',
  },  
}));
  
