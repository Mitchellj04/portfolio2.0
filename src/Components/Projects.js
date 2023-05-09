import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import adventure from '../Images/adventureblog.png'
import skibuddy from '../Images/skibuddy.jpg'
import watercooler from '../Images/watercooler2.jpg'
import crypto from '../Images/cryptonite.png'
import '../Project.css'

const Projects = () => {

    


    

    const displayProjects = projects.map((project) => {
    })
  return (
    <div className='projects' id='project'>
        <Typography variant='h3' style={{textAlign: 'left', marginLeft: '8vw', color: 'whitesmoke', textDecoration: 'underline', textDecorationColor: '#FE6140'}}>Projects</Typography>
        <Grid container className='project-grid-container'>
            {displayProjects}
        </Grid>
    </div>
  )
}

export default Projects