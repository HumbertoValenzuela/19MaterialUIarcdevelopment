import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import {
  Grid,
  // useMediaQuery,
  useTheme,
  Typography,
  // Button,
  // TextField,
} from '@mui/material';
import { GridBackgroundContact } from './contactEstilo';
import phoneIcon from '../../../assets/phone.svg';
import emailIcon from '../../../assets/email.svg';
import ContactSegundaSeccion from './ContactSegundaSeccion';
import ContactTerceraSeccion from './ContactTerceraSeccion';
import DialogConfirmarDatosCorreo from './DialogConfirmarDatosCorreo';


const Contact = (props) => {
  const [open, setOpen] = useState( false );
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');

  const theme = useTheme();
  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        md={3}
        lg={5}    
      >
        <Grid  item >
          <Grid 
            container 
            direction='column' 
            alignItems='center'
          >
            <Grid item style={{ marginBottom: '2em'}}>
              <Typography
                variant='h2'
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.arcBlue }}
              > We' re waiting.
              </Typography>
            </Grid>

            <Grid item container justifyContent='center'>
              <Grid item>
                <img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.arcBlue, fontSize: '1rem' }}
                >
                  <a 
                    href='tel:+56 (123) 666-6666'
                    style={{ textDecoration: 'none', color: 'inherit'}}
                  >+56 (123) 666-6666</a>  
                </Typography>
              </Grid>
            </Grid>

            <Grid item container justifyContent='center'>
              <Grid item>
                <img src={emailIcon} alt='envelope' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.arcBlue, fontSize: '0.9rem' }}
                >
                  <a 
                    href='mailto:hvg.informatico@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit'}}
                  >hvg.informatico@gmail.com</a>  
                </Typography>
              </Grid>
            </Grid>


            <ContactSegundaSeccion 
              setOpen={setOpen}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              emailHelper={emailHelper}
              setEmailHelper={setEmailHelper}
              phone={phone}
              setPhone={setPhone}
              phoneHelper={phoneHelper}
              setPhoneHelper={setPhoneHelper}
              message={message}
              setMessage={setMessage}

            />

          </Grid>
        </Grid>

      </Grid>

      <DialogConfirmarDatosCorreo         
        open={open}
        setOpen={setOpen}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        emailHelper={emailHelper}
        setEmailHelper={setEmailHelper}
        phone={phone}
        setPhone={setPhone}
        phoneHelper={phoneHelper}
        setPhoneHelper={setPhoneHelper}
        message={message}
        setMessage={setMessage}
      />

      <GridBackgroundContact
        item
        container
        md={9}
        lg={7}
        alignItems='center'
      >
        <ContactTerceraSeccion
          setValue={props.setValue}
        />
      </GridBackgroundContact>

    </Grid>
  )
}

export default Contact
