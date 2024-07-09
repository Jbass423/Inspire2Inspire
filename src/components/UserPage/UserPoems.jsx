import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./UserPoems.css";

const UserPoems = ({ userId }) => {
  const dispatch = useDispatch();
  const poems = useSelector(store => store.poems);
  const [likedPoems, setLikedPoems] = useState([]);

  useEffect(() => {
    dispatch({ type: 'FETCH_POEMS', payload: userId });

    // Retrieve liked poems from local storage
    const storedLikedPoems = JSON.parse(localStorage.getItem('likedPoems')) || [];
    setLikedPoems(storedLikedPoems);
  }, [dispatch, userId]);

  const handleLikes = (id) => {
    if (!likedPoems.includes(id)) {
      dispatch({ type: "ADD_LIKE", payload: { id } });
      const updatedLikedPoems = [...likedPoems, id];
      setLikedPoems(updatedLikedPoems);
      localStorage.setItem('likedPoems', JSON.stringify(updatedLikedPoems));
    } else {
      console.log("Poem already liked by the user");
    }
  };

  return (
    <div>
      <h2><b>Quick Inspiration</b></h2>
      {poems.length === 0 ? (
        <p>No poems available</p>
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
              {poems.map(poem => (
                <TableRow key={poem.id}>
                  <TableCell>
                    <div dangerouslySetInnerHTML={{ __html: poem.poems }} />
                  </TableCell>
                  <TableCell align="right">{poem.likes}</TableCell>
                  <TableCell align="right">
                    {!likedPoems.includes(poem.id) && (
                      <Button onClick={() => handleLikes(poem.id)}>
                        <FavoriteIcon />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default UserPoems;
