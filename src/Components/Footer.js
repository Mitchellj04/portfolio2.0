import { Box, IconButton, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from '../Images/logo-no-background.png'

const Footer = () => {


  return (
    <div className='footer'>
       
        <img src={logo} className='footer-logo'></img>
        <Box>
         <IconButton><Link href='https://github.com/Mitchellj04' target="_blank" rel="noopener noreferrer"><GitHubIcon style={{fontSize: 30, color: 'whitesmoke'}}/></Link></IconButton>
        <IconButton><Link href='https://www.linkedin.com/in/justin-mitchell-887a47149/' target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{fontSize: 30, color: 'whitesmoke'}}/></Link></IconButton>
        </Box>

    </div>
  )
}

export default Footer