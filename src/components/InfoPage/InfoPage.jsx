import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


function InfoPage() {
  const poems =useSelector(store => store.poems)
  console.log("checking poems", poems);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'FETCH_POEMS'});
  }, [dispatch]);

  return (
    <div className="container">
      <p>Info Page</p>
      
    </div>
  );
}

export default InfoPage;
