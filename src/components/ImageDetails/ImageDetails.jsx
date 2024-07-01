import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import CommentMapping from '../CommentSection/CommentMapping';
import CommentSection from '../CommentSection/CommentSection';
import DetailComments from './DetailComments';

const ImageDetails = () => {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const image = useSelector(store => store.imageDetails);
  const combine = useSelector(store => store.combined)
  



  useEffect(() => {
    console.log('Fetching image details for ID:', imageId);
    dispatch({ type: 'FETCH_IMAGE_DETAILS', payload: imageId });
    dispatch({ type: 'FETCH_POEMS_BY_IMAGE_ID', payload: imageId });
  }, [dispatch, imageId]);

  const returnHome = () => {
    history.push('/');
  };

  if (!image) {
    return <p>y it no work</p>;
  }

  return (
    <div>
      <h2>look at this art</h2>
      <img src={image.url} alt={`Image ${image.id}`} />
      <DetailComments imageId={image.id} />
      <button onClick={returnHome}>Home</button>
      <CommentMapping/>
    </div>
  );
};

export default ImageDetails;
