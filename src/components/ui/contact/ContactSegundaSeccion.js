import {
  // Button, 
  Grid,
  // TextField 
} from '@mui/material';
import React, { 
  // useState 
} from 'react';
import airplane from '../../../assets/send.svg';
import { CssTextField, SendButton } from './contactEstilo';

const ContactSegundaSeccion = (props) => {

  const { 
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

        if ( !valid ) {
          setPhoneHelper('Invalid Phone Number');
        } else {
          setPhoneHelper('');
        }
      break;

      default:
        break;
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <>

      <Grid
        item
        container
        direction='column'
        style={{ maxWidth: '20em', marginTop: '2em' }}
        alignItems='center'
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
            error={ emailHelper.length !== 0 }
            helperText={ emailHelper }
            id='email'
            value={email}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <CssTextField
            label='Phone'
            error={ phoneHelper.length !== 0 }
            helperText={ phoneHelper }
            id='phone'
            value={phone}
            onChange={onChange}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid
        item
        style={{
          marginTop: '1em',
          marginBottom: '1em',
          maxWidth: '20em',           
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

      <Grid
        item
        container
        justifyContent='center'
      >
        <SendButton 
          variant='contained'
          disabled={ 
            name.length === 0 ||
            email.length === 0 ||
            phone.length === 0 ||
            message.length === 0
          }
          onClick={handleClickOpen}
        > Send Message
          <img
            src={airplane}
            alt='paper airplane'
            style={{ marginLeft: '0.5em' }}
          />
        </SendButton>
      </Grid>
    </>
  )
}

export default ContactSegundaSeccion
