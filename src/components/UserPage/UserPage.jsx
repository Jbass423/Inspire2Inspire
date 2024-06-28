import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import UserImages from './UserImages';
import UserPost from './UserPost';


function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);


  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGE' })
  })



  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <p> your bio: {user.bio}</p>
        <LogOutButton className="btn" />
      </div>
      <UserPost />
      <UserImages />
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
