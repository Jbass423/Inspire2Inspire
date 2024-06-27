import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentMapping from '../CommentSection/CommentMapping';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function InfoPage() {
  const poems =useSelector(store => store.poems)
  const user =useSelector(store => store.user)
  const images = useSelector(store => store.images)
  console.log("checking poems", poems);
 







  return ( <>

  <ul>
    {images.map((img)=>(
      <li> 
        <img src={img.url}   />
        <CommentSection/>
        <CommentMapping/>
      </li>
    ))}
  </ul>
  
  </>
  )
}

export default InfoPage;
