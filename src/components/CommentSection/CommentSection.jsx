import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import CommentMapping from './CommentMapping';



function CommentSection({ imageId }) {
  
  const poems = useSelector(store => store.poems)
  const user = useSelector(store => store.user)
  
  const [newPoem, setPoem] = useState('')




  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_POEMS' });
  }, [dispatch]);

  const handlePoem = () => {
    dispatch({ type: 'ADD_POEM', payload: { poems: newPoem, user_id: user.id, image_id: imageId } })
    setPoem("")
  }

  return (
    <div className="container">
      <p>Info Page</p>
      <input
        type="text"
        value={newPoem}
        onChange={(e) => setPoem(e.target.value)}
        placeholder='add poem'
      />
      <button onClick={handlePoem}><ChatIcon /> </button>
      <CommentMapping />
    </div>
  );
}

export default CommentSection