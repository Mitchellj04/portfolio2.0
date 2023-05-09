import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react'
import '../Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div style={{color: 'whitesmoke'}} className='contact' id='contact'> 
        <Typography variant='h3' style={{color: 'whitesmoke', textDecoration: 'underline', textDecorationColor: '#FE6140'}} className='contact-title'>Contact</Typography>
        <Grid container className='contact-grid'>
            <Grid item xs={4}>
                <Box className='contact-message'>Please feel free to reach out to me by leaving a message. You can also contact my from the information below or my LinkedIn at the bottom of the page!</Box>
                <Box className='contact-box'><Typography variant='h5' > <EmailIcon/>  Email </Typography>  <Typography> mitchelljm04@gmail.com  </Typography> </Box>
              
                <Box className='contact-box'><Typography variant='h5'><LocalPhoneIcon />  Phone</Typography>   <Typography> 203-909-0635</Typography> </Box>
               
                
               
            </Grid>
            <Grid item xs={6}>
                <div className='form-div'>
                <form className='form'>
                    <TextField className='textfield' halfWidth name='user_name' label='name' placeholder='name' variant='filled' style={{backgroundColor: 'grey'}}></TextField>
                    <TextField className='textfield' halfWidth name='user_email' label='email' placeholder='email' variant='filled' type='email' style={{backgroundColor: 'grey'}}></TextField>
                    <textarea className='textarea' type='textarea' name='message' fullWidth label='message' variant='filled' style={{backgroundColor: 'grey'}}></textarea>
                    <Button className='form-button' variant='contained' fullWidth >Submit</Button>
                </form>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Contact