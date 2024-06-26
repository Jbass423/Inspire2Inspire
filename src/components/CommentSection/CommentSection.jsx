import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CommentMapping from './CommentMapping';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function CommentSection({imageId}) {
    console.log('Image ID:', imageId)
  const poems =useSelector(store => store.poems)
  const user =useSelector(store => store.user)
  console.log("checking poems", poems);
  const [ newPoem, setPoem]= useState('')


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'FETCH_POEMS'});
  }, [dispatch]);

const handlePoem = ()=>{
  dispatch({type: 'ADD_POEM', payload: {poems: newPoem, user_id: user.id, image_id: imageId}})
  setPoem("")
}

  return (
    <div className="container">
      <p>Info Page</p>
        <input 
          type="text"
          value={newPoem}
          onChange={(e)=> setPoem(e.target.value)}
          placeholder='add poem'
        />
        <button onClick={handlePoem}>add </button>
        <CommentMapping/>
    </div>
  );
}

export default CommentSection