import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const [ image , setImage ] = useState("")

  const sendImage = (event)=>{
    event.preventDefault()
    dispatch({type: 'SEND_IMAGE', payload: { url: image, user_id: user.id } })
  }
  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <p> your bio: {user.bio}</p>
      <LogOutButton className="btn" />
       </div>
       <form onSubmit={sendImage}>
          <label htmlFor="imageUrl">URL</label>
          <input
            id="imageUrl"
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
       </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
