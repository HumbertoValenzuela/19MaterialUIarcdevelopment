import {
  CircularProgress,
  // Button, 
  Dialog,
  DialogContent,
  Grid,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, {
  useState
} from 'react';
import { CssTextField } from '../contact/contactEstilo';
import check from '../../../assets/check.svg';
import { ButtonFreeEstimate } from '../../pages/estiloLandingPage';
import airplane from '../../../assets/send.svg';
import axios from 'axios';

const EstimateDialog = (props) => {

  const {
    showModal,
    setShowModal,
    questions,
    total,
    service,
    platforms,
    features,
    customFeatures,
    users,
    category
  } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(
    {
      open: false,
      message: '',      
      backgroundColor: ''
    }
  )


  const handleClose = () => {
    setShowModal(false)
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

  const softwareSelection = (
    <Grid container direction='column'>

      <Grid
        item
        container
        alignItems='center'
        style={{ marginBottom: '1em' }}
      >
        <Grid item xs={2}>
          <img src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            You want {service}
            {
              platforms.length > 0 && ` for ${
              //if only web application is selected...
              platforms.indexOf("Web Application") > -1 &&
                platforms.length === 1
                ? //then finish sentence here
                "a Web Application."
                : //otherwise, if web application and another platform is selected...
                platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 2
                  ? //then finish the sentence here
                  `a Web Application and an ${platforms[1]}.`
                  : //otherwise, if only one platform is selected which isn't web application...
                  platforms.length === 1
                    ? //then finish the sentence here
                    `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                      ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                      : //otherwise if all three are selected...
                      platforms.length === 3
                        ? //then finish the sentence here
                        "a Web Application, an iOS Application, and an Android Application."
                        : null
              }`
            }
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems='center'
        style={{ marginBottom: '1em' }}
      >
        <Grid item xs={2}>
          <img src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
              features.length === 1
                ? //then end the sentence here
                `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                  ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                  : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter(
                      (feature, index) =>
                        index !== features.length - 1
                    )
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 0 &&
              features.length !== 1 &&
              features.length !== 2
              ? //...and then finally add the last feature with 'and' in front of it
              ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems='center'
        style={{ marginBottom: '1em' }}
      >
        <Grid item xs={2}>
          <img src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            The custom features will be of {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${users} users.`}
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  );

  const websiteSelection = (
    <Grid container direction='column'>
      <Grid item container alignItems='center'>
        <Grid item xs={2}>
          <img src={check} alt='checkmark' />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='body1'>
            You want {category === 'Basic' ? 'a Basic Website' : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const handleSubmit = async (event) => {
    setLoading(true);

    let enviarDatoCorreo = {
      to: 'hrvg.frontend@gmail.com',
      subject: 'Solicitud de cotización',
      text: 'desde la web',
      html: `
      <p style="font-size: 16px">Nombre: ${name}</p>
      <p style="font-size: 16px">Correo: ${email}</p>
      <p style="font-size: 16px">Teléfono: ${phone}</p>
      <p style="font-size: 16px">Mensaje: ${message}</p>   
      <p style="font-size: 16px">Total: ${total}</p>
      <p style="font-size: 16px">Servicio: ${service}</p>
      <p style="font-size: 16px">Plataforma: ${platforms}</p>
      <p style="font-size: 16px">Features: ${features}</p> 
      <p style="font-size: 16px">Custom Features: ${customFeatures}</p>
      <p style="font-size: 16px">Cantidad de Usuario: ${users}</p>
      <p style="font-size: 16px">Categoria: ${category}</p>      
      `,
    };

    // const url = `http://localhost:4000/api/mailrequest`;
    const url = `https://arcdevelopmentserver.herokuapp.com/api/mailrequest`;
     

    try {
      const respuesta = await axios.post(url, enviarDatoCorreo);

      console.log(respuesta.data);

      setLoading(false); //cancelar progreso
      // setOpen(false);//cerrar el dialog
      setShowModal(false)
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
      <Dialog
        open={showModal}
        onClose={handleClose}
        style={{
          marginTop: '10%',
          zIndex: 1302
        }}
        PaperProps={{ style: { width: '100%' } }}
        fullScreen={fullScreen}
        fullWidth
        maxWidth='lg'
      >
        <Grid container justifyContent='center' >
          <Grid item style={{ marginTop: '1em' }}>
            <Typography variant='h2' align='center'>
              Estimate
            </Typography>
          </Grid>
        </Grid>

        <DialogContent>
          <Grid
            container
            justifyContent='space-around'
            direction={matchesSM ? 'column' : 'row'}
            alignItems={matchesSM ? 'center' : undefined}
          >
            <Grid
              item
              container
              direction='column'
              md={7}
              style={{ maxWidth: '20em' }}
            >

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



              <Grid item>
                <Typography variant='body1' paragraph>
                  We can create this digital solution for an estimated <span>   ${total.toFixed(2)}</span>
                </Typography>
                <Typography variant='body1' paragraph>
                  Fill out  your name, phobe number and email, place your request, and we'll get back to you with details moving forward and a final price.

                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='column'
              alignItems='center'
              md={5}
            >
              <Grid item>
                {
                  questions.length > 2 ? softwareSelection : websiteSelection
                }
              </Grid>

              <Grid item>
                <ButtonFreeEstimate
                  variant='contained'
                  onClick={handleSubmit}
                  type='submit'
                  disabled={
                    name.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    message.length === 0 ||
                    loading
                  }
                >
                  Request
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
                      marginTop: '-13px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
                </ButtonFreeEstimate>

              </Grid>

            </Grid>
          </Grid>
        </DialogContent>

      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </>
  )
};

export default EstimateDialog;
