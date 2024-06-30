import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import CommentMapping from '../CommentSection/CommentMapping';
import CommentSection from '../CommentSection/CommentSection';

const ImageDetails = () => {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const image = useSelector(store => store.imageDetails);
console.log("checking image in details ", image );

  useEffect(() => {
    console.log('Fetching image details for ID:', imageId);
    dispatch({ type: 'FETCH_IMAGE_DETAILS', payload: imageId });
  }, [dispatch, imageId]);

  const returnHome = () => {
    history.push('/');
  };

  if (!image) {
    return <p>y it no work</p>;
  }

  return (
    <div>
      <h2>look at this art </h2>
      <img src={image.url} alt={`Image ${image.id}`} />
      <CommentSection imageId={image.id} />
      <button onClick={returnHome}>Home</button>
    </div>
  );
};

export default ImageDetails;
