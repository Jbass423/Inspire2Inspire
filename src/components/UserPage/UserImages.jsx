import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentSection from '../CommentSection/CommentSection';

import { ImageList, ImageListItem } from '@mui/material';

const UserImages = () => {
  const dispatch = useDispatch();
  const images = useSelector((store) => store.images);
  const user = useSelector((store) => store.user);
  

  const handleLikes = (id) => {
    dispatch({ type: "ADD_LIKE", payload: id });
  };

  const handleDelete = (id,event) => {
    event.stopPropagation();
     
      dispatch({ type: "DELETE_IMAGE", payload: id });
  }
  

  const userImages = images.filter((pic) => pic.user_id === user.id);
  console.log("checking filt" , userImages);

  return (
    <ImageList sx={{ width: 700, height: 550 }} cols={3} rowHeight={164}>
      {userImages.map((pic, index) => (
        <ImageListItem key={index}>
          <img
            srcSet={`${pic.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${pic.url}?w=164&h=164&fit=crop&auto=format`}
            alt={`Image ${index}`}
            loading="lazy"
          />
          <button onClick={() => handleDelete(pic.id , event)}>DELETE</button>
          
          
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default UserImages;