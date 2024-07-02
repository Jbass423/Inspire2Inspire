import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentMapping from "../CommentSection/CommentMapping";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';


const DetailComments = ({imageId})=>{
    const dispatch = useDispatch()
    const combine = useSelector(store => store.combined)
    console.log("checking", combine)

    const handleLikes = (id) => {
        event.preventDefault()
        dispatch({ type: "ADD_LIKE", payload: { id } })

    }

    const deleteComment = (event, id) => {
        event.preventDefault()
        event.stopPropagation();
        dispatch({ type: "DELETE_POEM", payload: { id } })


    };

    
    
    useEffect(() => {
        if (imageId) {
          dispatch({ type: 'FETCH_POEMS_BY_IMAGE_ID', payload: imageId });
        }
      }, [dispatch, imageId]);

      const filteredComments = combine.filter(comment => Number(comment.image_id) === Number(imageId));


return (
    <div>
    <h3>words to inspire</h3>
    {filteredComments.length === 0 ? (
      <p>No comments for this image</p>
    ) : (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Poem</TableCell>
              <TableCell align="right">User ID</TableCell>
              <TableCell align="right">Likes</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredComments.map(comment => (
              <TableRow key={comment.id}>
                <TableCell>{comment.poems}</TableCell>
                <TableCell align="right">{comment.user_id}</TableCell>
                <TableCell align="right">{comment.likes}</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleLikes(comment.id)}>
                    <FavoriteIcon />
                  </button>
                  <button onClick={(event) => deleteComment(event, comment.id)}>
                    <DeleteIcon />
                  </button>
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