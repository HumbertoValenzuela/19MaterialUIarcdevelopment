import axios from 'axios';
import {
  Button,
  // Dialog, 
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Snackbar
} from '@mui/material';

import
React,
{
  // useRef
  useState
} from 'react';
import { BootstrapDialog, CssTextField, SendButton } from './contactEstilo';
import airplane from '../../../assets/send.svg';
import { templatehtml } from './templatehtml';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogConfirmarDatosCorreo = (props) => {

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(
    {
      open: false,
      message: '',      
      backgroundColor: ''
    }
  )
  // let refNameTextField = useRef();

  const {
    open,
    setOpen,
    name,
    setName,
    email,
    setEmail,
    emailHelper,
    setEmailHelper,
    phone,
    setPhone,
    phoneHelper,
    setPhoneHelper,
    message,
    setMessage, } = props;

  const handleClose = () => {
    setOpen(false);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        // false if invalid email
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
          .test(event.target.value);
        if (!valid) {
          setEmailHelper('Invalid Email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

        if (!valid) {
          setPhoneHelper('Invalid Phone Number');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  }

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  // const handleToggletest = () => {
  //   if (refNameTextField.current.textContent === 'hola') {
  //     refNameTextField.current.textContent = 'adios';
  //   } else {
  //     refNameTextField.current.textContent = 'hola';
  //   }

  // }
  // console.log(refNameTextField);
  // <>
  /* <button ref={refNameTextField} onClick={handleToggletest}>hola</button> */



  const handleSubmit = async (event) => {
    setLoading(true);

    let enviarDatoCorreo = {
      to: 'hrvg.frontend@gmail.com',
      subject: 'Contacto desde la web',
      text: 'desde la web',
      html: `
      <p style="font-size: 16px">From: ${name}</p>
      <p style="font-size: 16px">From: ${email}</p>
      <p style="font-size: 16px">From: ${phone}</p>
      <p style="font-size: 16px">From: ${message}</p>      
      `,
    };

    let enviarCorreoCliente = {
      to: email,
      subject: 'Contacto desde la web',
      text: 'desde la web',
      html: templatehtml,
    };

    // const url = `http://localhost:4000/api/mail`;
    const url = `https://arcdevelopmentserver.herokuapp.com/api/mail`;
     

    try {
      const respuesta = await axios.post(url, enviarDatoCorreo);

      const respuestaParaUsuario = await axios.post(url, enviarCorreoCliente);


      console.log(respuesta.data);
      console.log(respuestaParaUsuario.data);

      setLoading(false); //cancelar progreso
      setOpen(false);//cerrar el dialog
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      // Snackbar
      setAlert({ open: true, message: 'Mensaje enviado',  backgroundColor: '#4BB543' });
     

    } catch (error) {
      console.log(error.response);
      setLoading(false); //cancelar progreso
      setAlert({ open: true, message: 'Error al enviar el mensaje', backgroundColor: '#FF3232' });
    }
  }

  return (
    <>
      <BootstrapDialog
        open={open}
        onClose={handleClose}
        style={{
          marginTop: '10%',
          paddingTop: fullScreen ? '8%' : '0%',
          zIndex: 1302
        }}
        TransitionComponent={Transition}
        PaperProps={{ style: { width: '100%' } }}
        fullScreen={fullScreen}

      >
        <DialogContent>
          <Grid
            container
            direction='column'
            style={{
              paddingLeft: matchesSM ? '0' : '2em',
              paddingRight: matchesSM ? '0' : '2em'
            }}
          >
            <Grid item>
              <DialogTitle
                variant='h4'
                gutterBottom
                style={{ textAlign: 'center' }}
                align='center'>Confirm Message</DialogTitle>
            </Grid>
            <Grid item>
              <CssTextField
                label='Name'
                id='name'
                value={name}
                onChange={handleChangeName}
                fullWidth
              />
            </Grid>
            <Grid item>
              <CssTextField
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                value={email}
                onChange={onChange}
                fullWidth
              />
            </Grid>
            <Grid item>
              <CssTextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                value={phone}
                onChange={onChange}
                fullWidth
              />
            </Grid>

            <Grid
              item
              style={{
                marginTop: '1em',
                marginBottom: '1em',

              }}
            >
              <CssTextField
                // InputProps={{ disableUnderline: true }}
                value={message}
                id='message'
                label='Message'
                multiline rows={4}
                onChange={handleChangeMessage}
                fullWidth
              />
            </Grid>


            <DialogActions style={{ justifyContent: 'center' }}>
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  style={{ marginBottom: '1em', fontWeight: 300, width: matchesSM ? '5em' : 'auto' }}

                >Cancel</Button>
              </Grid>
              <Grid item sx={{ m: 1, position: 'relative' }}>
                <SendButton
                  variant='contained'
                  type='submit'
                  onClick={handleSubmit}
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    loading
                  }
                > Send Message
                  <img
                    src={airplane}
                    alt='paper airplane'
                    style={{ marginLeft: '0.5em' }}
                  />
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-16px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
                </SendButton>
              </Grid>
            </DialogActions>
          </Grid>
        </DialogContent>
      </BootstrapDialog >
      <Snackbar 
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal:'center' }}
        onClose={ () => setAlert({...alert, open: false})}
        autoHideDuration={4000}
      />
    </>
  )
}

export default DialogConfirmarDatosCorreo
