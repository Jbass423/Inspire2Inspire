import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function UserPage() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const [image, setImage] = useState("")
  const images = useSelector(store => store.images)

  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGE' })
  })

  const sendImage = (event ) => {
    event.preventDefault()
    dispatch({ type: 'SEND_IMAGE', payload: { url: image, user_id: user.id } })
    setImage('')
  }

  const handleDelete = ( event, id) => {
    event.preventDefault()
   
    dispatch({type: "DELETE_IMAGE", payload: [id] })
  
  }
        


    
    



    const userImages = images.filter((pic) => pic.user_id === user.id);


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
          <ul>
            {userImages.map((pic, index) => (
              <li key={index}>
                <img src={pic.url} alt={`Image ${index}`} />
                <button key={pic.delete} onClick={(event)=> handleDelete(event, pic.image_id) } >DELETE</button>
              </li>
            ))}
          </ul>
        </form>
      </>
    );
  }

  // this allows us to use <App /> in index.js
  export default UserPage;
