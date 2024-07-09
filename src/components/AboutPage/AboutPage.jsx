import React from 'react';
import { CssBaseline, Container, Box, Grid } from '@mui/material';
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
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
                github:
                 https://github.com/Jbass423
              linkedin:
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
  );
}

export default AboutPage;
