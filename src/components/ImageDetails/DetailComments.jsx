import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import CommentSection from "../CommentSection/CommentSection";

const DetailComments = ({ imageId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const combine = useSelector(store => store.combined);
  const user = useSelector(store => store.user);
  const [likedComments, setLikedComments] = useState([]);

  useEffect(() => {
    if (imageId) {
      dispatch({ type: 'FETCH_POEMS_BY_IMAGE_ID', payload: imageId });
    }

    
    const storedLikedComments = JSON.parse(localStorage.getItem('likedComments')) || [];
    setLikedComments(storedLikedComments);
  }, [dispatch, imageId]);

  const handleLikes = (id) => {
    event.preventDefault();
    if (!likedComments.includes(id)) {
      dispatch({ type: "ADD_LIKE", payload: { id } });
      const updatedLikedComments = [...likedComments, id];
      setLikedComments(updatedLikedComments);
      localStorage.setItem('likedComments', JSON.stringify(updatedLikedComments));
    } else {
      console.log("Comment already liked by the user");
    }
  };

  const deleteComment = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({ type: "DELETE_POEM", payload: { id } });

    
    const updatedLikedComments = likedComments.filter(commentId => commentId !== id);
    setLikedComments(updatedLikedComments);
    localStorage.setItem('likedComments', JSON.stringify(updatedLikedComments));
  };

  const handleEditClick = (poem) => {
    
      dispatch({ type: 'SET_EDIT_POEM', payload: poem });
      history.push('/edit');
   
  };

  const filteredComments = combine.filter(comment => Number(comment.image_id) === Number(imageId));

  return (
    <div>
      <h3>Words to Inspire</h3>
      {filteredComments.length === 0 ? (
        <p>No comments for this image</p>
      ) : (
        <TableContainer component={Paper} style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Poem</TableCell>
                <TableCell align="right">Likes</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredComments.map(comment => (
                <TableRow key={comment.id}>
                  <TableCell>
                    <div dangerouslySetInnerHTML={{ __html: comment.poems }} />
                  </TableCell>
                  <TableCell align="right">{comment.likes}</TableCell>
                  <TableCell align="right">
                    {!likedComments.includes(comment.id) && (
                      <Button onClick={() => handleLikes(comment.id)}>
                        <FavoriteIcon />
                      </Button>
                    )}
                    <Button onClick={(event) => deleteComment(event, comment.id)}>
                      <DeleteIcon />
                    </Button>
                   
                      <Button onClick={() => handleEditClick(comment)}>
                        Edit!
                      </Button>
                   
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <CommentSection imageId={imageId} />
    </div>
  );
};

export default DetailComments;
