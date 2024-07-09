import React from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
    <div className="container">
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor:'#000000', padding: '20px' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
            <h2>What we are about and what we aim to do:</h2>
              <p>
                <b>
                  Welcome to Inspire 2 Inspire, a place where artists and writers of all types can freely express their talents while inspiring others to do the same and find creativity they didn't know they had. Unlike other social media platforms, I2I aims to be a place that does not judge anyone on the art or words they contribute. This place is not about like or dislike; it's about how it made you feel and what you can build from the inspiration you find here. We encourage all forms of art and writings to be contributed to the melting pot and leave your piece mixed in for the world to see and be inspired by.
                 </b>
              </p>
              <h2>
                Contact info:
                
                 https://github.com/Jbass423
              
               www.linkedin.com/in/joshuabass423</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="/images/Inspire2Inspire.jpg" alt="Inspire 2 Inspire" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  </div>

  <div> 
    <h2>Technologies used to make this website</h2>
    <h2><ul>
      <li> React </li>
      <li> Redux </li>
      <li>JS</li>
      <li> Node.js</li>
      <li> Mui </li>
      <li> Express</li>
      <li> SQL </li>
      <li> Postgres</li>
      </ul></h2>
    
  </div>
  <div>
    <h2> Coming soon to Inspire2Inspire ..... </h2>
    <h2>
      <ol>
        <li> More interactive for the user to visit other user pages</li>
        <li> Page to commission artist and writers</li>
        <li>Give the user the ability to add any art or poem to a favorites</li>
        <li> Tags and filters to narrow down to what you only want to see</li>
      </ol>
    </h2>
  </div>
  </>
  );
}

export default AboutPage;
