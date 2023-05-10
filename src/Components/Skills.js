import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import '../Skills.css'

const Skills = () => {

    const frontend = ['Javascript', 'HTML', 'CSS', 'React', 'Material UI', 'Wordpress']
    const backend = ['Redux', 'Ruby', 'Ruby on Rails', 'RESTful API', 'SQL', 'Postgres', 'OOP']

  return (
    <div className='skills-div' id='skills'>
        <Typography variant='h3' className='skills-title' style={{color: 'whitesmoke',textAlign: 'left', textDecoration: 'underline', textDecorationColor: '#FE6140', marginLeft: '20vw'}}>Skills</Typography>

                <Card className='skills-frontend' style={{backgroundColor: 'transparent'}}>
                    <Typography variant='h4' style={{textDecoration: 'underline', textDecorationColor: 'whitesmoke', color: 'whitesmoke', marginBottom: 15}}>Frontend Skills</Typography>
                    <i  style={{fontSize: 70, margin: 20}} class="devicon-html5-plain-wordmark colored" ></i>
                    <i  style={{fontSize: 70, margin: 20}} class="devicon-javascript-plain colored" ></i>
                    <i  style={{fontSize: 70, margin: 20}} class="devicon-react-original-wordmark colored" ></i>
                    <i  style={{fontSize: 70, margin: 20}} class="devicon-css3-plain colored"></i>
                    <i  style={{fontSize: 70, margin: 20}} className='icon' class="devicon-materialui-plain colored"></i>
                    <i style={{fontSize: 70, margin: 20}} class="devicon-vscode-plain-wordmark"></i>
                    <i style={{fontSize: 70, margin: 20}} class="devicon-npm-original-wordmark colored"></i>
                    <i style={{fontSize: 70, margin: 20}} class="devicon-photoshop-line colored"></i>

                </Card>

                <Card className='skills-backend' style={{backgroundColor: 'transparent'}}>
                <Typography variant='h4' style={{textDecoration: 'underline', textDecorationColor: 'whitesmoke', color: 'whitesmoke', marginBottom: 15}}>Backend Skills</Typography>
                        <i style={{fontSize: 70, margin: 20}} class="devicon-ruby-plain-wordmark colored"></i>
                        <i style={{fontSize: 70, margin: 20}} class="devicon-rails-plain-wordmark colored"></i>     
                        <i style={{fontSize: 70, margin: 20}} class="devicon-redux-original colored"></i>
                        <i style={{fontSize: 70, margin: 20}} class="devicon-heroku-plain-wordmark colored"></i>
                        <i style={{fontSize: 70, margin: 20}} class="devicon-postgresql-plain-wordmark colored"></i>
                        
            <i style={{fontSize: 70, margin: 20}} class="devicon-mysql-plain-wordmark colored"></i>

            <i style={{fontSize: 70, margin: 20}} class="devicon-fastapi-plain"></i>
          
                  
                </Card>
    </div>
  )
}

export default Skills