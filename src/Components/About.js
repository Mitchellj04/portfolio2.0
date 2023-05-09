import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import resume from "../Resume.pdf";
import '../About.css'

const About = () => {
  return (
    <div className="about-me" id='about'>
      <Grid container>
        <Grid item xs={12} sm={6} className='about-grid-item'>
          <Typography className="about-title" variant="h3" style={{color: 'whitesmoke', textDecoration: 'underline', textDecorationColor: '#FE6140', marginLeft: '10vw'}}>
            About Me
          </Typography>
          <Box className='about-box'>
          <Typography className="about-text" variant='h6'>
            Hello I am Justin Mitchell. I am a Full-Stack developer that
            specializes in Frontend Developing. I am a freelance developer
            working with clients to build flawess websites for their businesses.
          </Typography>
          <Box style={{alignItem: 'left'}}>
          <Button variant="contained" className="about-contact" style={{margin: 10}}>
            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
          </Button>
          <Button variant="contained" className="about-resume" style={{margin: 10}} href={resume} startIcon={<FileDownloadIcon/>} target="_blank" rel="noopener noreferrer">
            Resume
          </Button>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="/developer.jpeg"></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;