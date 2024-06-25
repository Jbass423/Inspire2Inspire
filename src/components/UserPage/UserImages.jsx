import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';


const UserImages = ()=> { 
    const dispatch = useDispatch()
    const images = useSelector(store => store.images)
    const user = useSelector((store) => store.user);

    const handleDelete = ( event, id) => {
        event.preventDefault()
       
        dispatch({type: "DELETE_IMAGE", payload: [id] })
      
      }

      const userImages = images.filter((pic) => pic.user_id === user.id);

      return (

        <ul>
            {userImages.map((pic, index) => (
              <li key={index}>
                <img src={pic.url} alt={`Image ${index}`} />
                <button key={pic.delete} onClick={(event)=> handleDelete(event, pic.image_id) } >DELETE</button>
              </li>
            ))}
          </ul>

      )
}

export default UserImages