import { Button, Dialog, Grid, styled, TextField } from '@mui/material';
import background from '../../../assets/background.jpg';

export const GridBackgroundContact = styled(Grid)( ({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover', //cubierto
  backgroundRepeat: 'no-repeat',
  height: '60em',//que ocupe todo el espacio disponible. pero el contenedor solo contiene la tarjeta y nada más. Así que la imagen en realidad no tiene espacio para mostrarse. Y lo que se hace es agregar una height fija a nuestro contenedores para que la imagen sepa llenar
  // width: '100%', por default es 0 por tanto no lo mostraría
  width: '100%',
}));


export const CssTextField = styled(TextField)( ({ theme }) => ({
  '& label.Mui-focused': {
    color: '#0B72B9',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0B72B9',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0B72B9',
    },
    '&:hover fieldset': {
      borderColor: '#FFBA60',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0B72B9',
    },
  },
  marginBottom: '0.6em',
  [theme.breakpoints.down('xs')]: {
    width: 180,  
  },
  [theme.breakpoints.down('sm')]: {
    width: 200,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },

}));

export const SendButton = styled(Button)( ({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  height: 45,
  width: 200,
  fontSize: '1rem',
  backgroundColor: theme.palette.secondary.main,  
  '&:hover': {
    // backgroundColor: theme.palette.secondary.light,
    backgroundColor: theme.palette.secondary.dark,
  },
  marginBottom: '1em',
  [theme.breakpoints.down('sm')]: {
    width: 140,
    fontSize: '0.8rem',
    padding: '0',
    height: 40,
  },
}));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  // '& .MuiDialogContent-root': {
  //   padding: theme.spacing(1),
  // },
  // '& .MuiDialogActions-root': {
  //   padding: theme.spacing(0),
  // },
  // '& .MuiDialogTitle-root': {
  //   padding: theme.spacing(0),
  // },
}));
