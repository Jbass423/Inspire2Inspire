import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CommentMapping from '../CommentSection/CommentMapping';
import CommentSection from '../CommentSection/CommentSection';
import DetailComments from './DetailComments';
import InfoPage from '../InfoPage/InfoPage';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={7}>
          
            <h2>Here is some inspiration</h2>
            <img src={image.url} alt={`Image ${image.id}`} style={{ maxWidth: '900px', maxHeight: '550px', padding:"25px"}} />
          
        </Grid>
        <Grid xs={5}>
          <Item>
            <DetailComments imageId={image.id} />
          </Item>
        </Grid>
      </Grid>
    </Box>
    <InfoPage />
    </>
  );
};

export default ImageDetails;
