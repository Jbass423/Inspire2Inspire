import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import UserImages from './UserImages';
import UserPost from './UserPost';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './UserPage.css'
import UserPoems from './UserPoems';
import CommentSection from '../CommentSection/CommentSection';
import { color } from 'framer-motion';



function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const fav = useSelector((store)=> store.favorites)
  console.log("checking fav", fav)


  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGE'})
  
  })



  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xsm">
       
      <Box sx={{ bgcolor: '#000000', height: '5cm' }} >
        <p>  Bio:<b> {user.bio}</b></p>
        </Box>
      </Container>
    </React.Fragment>

       
      </div>
      
      <UserPost />
      
      <UserImages />
      <UserPoems/>
      <h2>Add some inspiration</h2>
      <CommentSection/>
      <LogOutButton className="btn" />
    </>
  );
}


export default UserPage;
