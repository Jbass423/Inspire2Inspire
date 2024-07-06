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
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ marginRight: '20px' }}>
      <h2>Look at this art</h2>
      <img src={image.url} alt={`Image ${image.id}`} style={{ maxWidth: '400px', maxHeight: '400px' }} />
    </div>
    <div>
      <DetailComments imageId={image.id} />
    </div>
  </div>
  );
};

export default ImageDetails;
