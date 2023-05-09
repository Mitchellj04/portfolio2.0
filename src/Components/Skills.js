import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import '../Skills.css'

const Skills = () => {

    const frontend = ['Javascript', 'HTML', 'CSS', 'React', 'Material UI', 'Wordpress']
    const backend = ['Redux', 'Ruby', 'Ruby on Rails', 'RESTful API', 'SQL', 'Postgres', 'OOP']

  return (
    <div className='skills-div' id='skills'>
        <Typography variant='h3' className='skills-title' style={{color: 'whitesmoke',textAlign: 'left', textDecoration: 'underline', textDecorationColor: '#FE6140', marginLeft: '20vw'}}>Skills</Typography>
        <Grid container className='skills-grid-container'>
            <Grid item xs={12} sm={4} className='skills-grid-frontend'>
                <Card className='skills-frontend'>
                    <Typography variant='h4' style={{textDecoration: 'underline', textDecorationColor: 'whitesmoke', color: 'whitesmoke'}}>Frontend Skills</Typography>
                    <ul className='list' style={{listStyleType: 'none'}}>
                        {frontend.map((skill) => {
                           return <li>{skill}</li>
                        })}
                    </ul>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} className='skills-grid-backend'>
                <Card className='skills-backend'>
                    <Typography variant='h4' style={{textDecoration: 'underline', textDecorationColor: 'whitesmoke', color: 'whitesmoke'}}>Backend Skills</Typography>
                        <ul className='list' style={{listStyleType: 'none'}}>
                            {backend.map((skill) => {
                               return <li>{skill}</li>
                            })}
                        </ul>
                </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default Skills