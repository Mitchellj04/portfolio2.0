import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import React from 'react'
import adventure from '../Images/adventureblog.png'
import skibuddy from '../Images/skibuddy.jpg'
import watercooler from '../Images/watercooler2.jpg'
import crypto from '../Images/cryptonite.png'
import beachbum from '../Images/beachbum.png'
import apizza from '../Images/apizza.png'
import '../Project.css'

const Projects = () => {
  const projects = [
    {title: "Beachbum", description: "Beachbum was created to sell afforable and stylish cloths that fit a specific criteria. Which is just that a beachbum, someone who enjoys relaxing at the beach, going surfing, hitting the lake on a hot day. Whatever your choice we have the style for you. On top of the clothing brand we are on a mission to clean up the beautiful beaches which we enjoy so much.", image: '/static/media/beachbum.e3c71ac6d1d371d6201d.png', code: "https://github.com/Mitchellj04/beachbum", url: "https://beachbum-app.onrender.com/"}, 
    {title: "Veneziali Apizza", description: "Welcome to the home of Veneziali Apizza established in 2018 we have been bringing CT style pizza to our customers. With expansions our recent expansions in opening a vineyard and brewery we have everything that you can imagine and then more.", image: "/static/media/apizza.c8c9f9c508c7d58b4b6f.png", url: "https://venezialiapizza.netlify.app/", code: "https://github.com/Mitchellj04/apizza"},
    {title: "Travel Blog", description: "Through my adventures of traveling I have taken thousands of pictures and videos. I created an instagram page to showcase these adventures, and now I have created a web page to go alone with that. This website showcases some of my favorite adventures and trips. If you want to share some of your own adventures reach out on the contact page.", image: '/static/media/adventureblog.821ab02745a5e33bf2dc.png', url: 'https://adventure-blog.onrender.com', code: "https://github.com/Mitchellj04/adventure-blog"}, 
    {title: "Developer Portal", description: "Creating a new project or have a problem with a current project? Look no further this app is designed by developers for developers. Be able to collaborate with other developers on your free time to create new projects or just see what everyone else is up to. If you're stuck on a bug or issue create a post and wait for another savy developer to help you out.", image: '/static/media/watercooler2.d25fc121dcbac3678372.jpg', url: "https://watercooler-app.onrender.com", code: "https://github.com/Mitchellj04/WaterCooler"}, 
]

console.log(projects)

  

  const displayProjects = projects.map((project) => {
      return <Grid item xs={12} sm={6} className='project-grid-item'>
          <Card className='project-card' style={{background: 'black', color: 'whitesmoke'}}>
          <CardMedia component='img'image={project.image}></CardMedia>
          <CardContent className='project-text'>{project.description}</CardContent>
          <CardActions>
              <Button variant="contained" className="about-resume" style={{margin: 10}} href={project.url} startIcon={<VisibilityIcon/>} target="_blank" rel="noopener noreferrer">Demo</Button>
              <Button variant="contained" className="about-resume" style={{margin: 10}} href={project.code} startIcon={<CodeIcon/>} target="_blank" rel="noopener noreferrer">Code</Button>
          </CardActions>
      </Card>
      </Grid>
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