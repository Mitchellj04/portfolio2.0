import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import ParticleBackground from './Particles/ParticleBackground'

const Home = () => {
  return ( 
  
  
    <div className='home-page' id='home'>
      <ParticleBackground />
      <Box className='home-box'>
        <Avatar classsName='avatar' sx={{ height: '200px', width: '200px', alignItem: 'center', textAlign: 'center'}} src={'/portfoliophoto.jpg'} />
        <Typography variant='h4'>
            Hello! I'm Justin Mitchell
        </Typography>
        <Typography>Full-Stack Developer specializing in Frontend Developing</Typography>
        
        <i  style={{fontSize: 70}} class="devicon-html5-plain-wordmark colored" ></i>
        <i  style={{fontSize: 70}} class="devicon-javascript-plain colored" ></i>
        <i  style={{fontSize: 70}} class="devicon-react-original-wordmark colored" ></i>
        <i  style={{fontSize: 70}} class="devicon-ruby-plain-wordmark colored"></i>
        <i  style={{fontSize: 70}} class="devicon-css3-plain colored"></i>
        <i  style={{fontSize: 70}} className='icon' class="devicon-materialui-plain colored"></i>
          
        </Box>
    </div>
  )
}

export default Home