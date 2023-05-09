import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from '../Images/logo-no-background.png'

const Footer = () => {


  return (
    <div className='footer'>
       
        <img src={logo} className='footer-logo'></img>
        <Box>
         <IconButton><GitHubIcon style={{fontSize: 30, color: 'whitesmoke'}}/></IconButton>
        <IconButton><LinkedInIcon style={{fontSize: 30, color: 'whitesmoke'}}/></IconButton>
        </Box>

    </div>
  )
}

export default Footer