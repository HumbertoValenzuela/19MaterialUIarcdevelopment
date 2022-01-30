import { Button, Card, Grid } from '@mui/material';
import { styled, } from '@mui/system';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';

export const GridLottieTamano = styled(Grid)( ({ theme }) => ({
  maxWidth: '30em',
  minWidth: '15em',
  marginTop: '2em',
  marginLeft: '5%'
}));

export const ButtonFreeEstimate = styled(Button)( ({ theme }) => ({
  ...theme.typography.estimate,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 50,
  height: 40,
  width: 145,
  marginRight: 20,  
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
  [theme.breakpoints.down('md')]: {
    height: 30,
    width: 130,
    marginRight: 10,
    fontSize: '0.8rem',
  }
}));


export const ButtonLearnMore = styled(Button)( ({ theme }) => ({
  borderColor: theme.palette.common.blue,
  // color: theme.palette.common.blue,
  borderWidth: 2,
  textTransform: 'none',
  borderRadius: 50,
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  height: 40,
  width: 145,  
  [theme.breakpoints.down('md')]: {
    height: 30,
    width: 130,
    // marginRight: 10,
    fontSize: '0.8rem',
  }
}));

export const SpanColorPacifico = styled('span')( ({ theme }) => ({
  fontFamily: 'Pacifico',
  color: theme.palette.secondary.main,
}));

export const ImgcustomSoftwareIcon = styled('img')( ({ theme }) => ({
  marginLeft: '1em',
  [theme.breakpoints.down('md')]: {
    marginTop: '1em',
  },
  [theme.breakpoints.down('xs')]: {
    marginLeft: 0,
  }
}));

export const GridServiceContainer = styled(Grid)( ({ theme }) => ({
  marginTop: '5em',
  // justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    textAlign: 'center',
  }
}));

export const GridIosAndroidContainer = styled(Grid)( ({ theme }) => ({
  marginTop: '5em',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {    
    textAlign: 'center',
  }
}));

export const GridPrimerBloque = styled(Grid)( ({ theme }) => ({
  marginLeft: '3em',  
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,    
  }
}));

export const DivRevolutionBackground = styled('div')( ({ theme }) => ({
  backgroundImage: `url(${revolutionBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover', //cubierto
  backgroundRepeat: 'no-repeat',
  height: '100%',//que ocupe todo el espacio disponible. pero el contenedor solo contiene la tarjeta y nada más. Así que la imagen en realidad no tiene espacio para mostrarse. Y lo que se hace es agregar una height fija a nuestro contenedores para que la imagen sepa llenar
  // width: '100%', por default es 0 por tanto no lo mostraría
  width: '100%',
}));

export const CardRevolution = styled(Card)( ({ theme }) => ({
  position: 'absolute',
  boxShadow: theme.shadows[10],
  borderRadius: 15,
  padding: '8em',
  [theme.breakpoints.down('sm')]: {
    paddingTop: '4em',
    padddingBottom: '4em',
    paddingLeft: 0,
    paddingRight: 0,    
    // Se crea un padding cuando se hace pequeño para solucionar agregar width: '100%' en el divRevolutionBackground 
    width: '100%',
  },
  [theme.breakpoints.down('xs')]: {
    width: "100%",
  }
}));

export const DivInfoBackground = styled('div')( ({ theme }) => ({
  backgroundImage: `url(${infoBackground})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}));

export const GridItemContacUs = styled(Grid)( ({ theme }) => ({
  marginRight: '3em',
  [theme.breakpoints.down('md')]: {
    marginLeft: '3em',    
  }
}));

export const GridcontainerAboutContactUs = styled(Grid)( ({ theme }) => ({
  justifyContent: 'space-between',
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center', 
       
  }
}));









