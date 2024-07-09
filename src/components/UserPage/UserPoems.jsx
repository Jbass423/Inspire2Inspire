import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserPoems.css"

const UserPoems = ({ userId }) => {
  const dispatch = useDispatch();
  const poems = useSelector(store => store.poems);

  useEffect(() => {
    dispatch({ type: 'FETCH_POEMS', payload: userId });
  }, [dispatch, userId]);

  return (
    <div>
      <h2><b>Quick Inspiration</b></h2>
      <ol>
       <b> {poems.map(poem => (
          <li key={poem.id} dangerouslySetInnerHTML={{ __html: poem.poems }} />
        ))} </b>
      </ol>
    </div>
  );
};



export default UserPoems;