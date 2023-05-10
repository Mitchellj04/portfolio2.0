import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import emailjs from '@emailjs/browser';
import React, {useRef, useState} from 'react'
import '../Contact.css'
import { TroubleshootOutlined } from '@mui/icons-material';

const Contact = () => {

    const [sent, setSent] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_o6v3sf4', 'template_hysxkct', form.current, 'mQ1yB0iSJyY0jycxv')
          .then((result) => {
             console.log(result.text)
             setSent(true)
             setSuccess('Message Succesfully Sent')
          }, (error) => {
              console.log(error.text);
              setSent(false)
              setError('Message could not be sent')
          });
      };
    
    const messages = () => {
        if(sent === true){
           return <Alert variant='success' className='success'>{success}</Alert>
        }
        else if (sent === false){
           return <Alert variant='error' className='error'>{error}</Alert>
        }
        else {

        }
    }

  return (
    <div style={{color: 'whitesmoke'}} className='contact' id='contact'> 
        <Typography variant='h3' style={{color: 'whitesmoke', textDecoration: 'underline', textDecorationColor: '#FE6140'}} className='contact-title'>Contact</Typography>
        <Grid container className='contact-grid'>
            <Grid item xs={8} sm={4}>
                <Box className='contact-message'>Please feel free to reach out to me by leaving a message. You can also contact my from the information below or my LinkedIn at the bottom of the page!</Box>
                <Box className='contact-box'><Typography variant='h5' > <EmailIcon/>  Email </Typography>  <Typography> mitchelljm04@gmail.com  </Typography> </Box>
              
                <Box className='contact-box'><Typography variant='h5'><LocalPhoneIcon />  Phone</Typography>   <Typography> 203-909-0635</Typography> </Box>
               
                
               
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className='form-div'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <label className='label'>Name</label>
                    <input type='text' className='textfield' halfWidth name="user_name" label='name' placeholder='name' variant='filled' style={{backgroundColor: 'grey'}}></input>
                    <label className='label'>Email</label>
                    <input className='textfield' halfWidth required name="user_email" label='email' placeholder='email' variant='filled' type='email' style={{backgroundColor: 'grey'}}></input>
                    <label className='label'>Message</label>
                    <textarea className='textarea' type='textarea' name="message"  fullWidth label='message' variant='filled' style={{backgroundColor: 'grey'}}></textarea>
                    <Button className='form-button' variant='contained' fullWidth type='submit' value='Send' style={{margin: '20px'}}>Submit</Button>
                </form>
                {messages}
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Contact