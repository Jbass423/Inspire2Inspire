import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';


const CommentMapping = () => {
    const users = (store => store.user)
    const images = useSelector(store => store.images)
    const poems = useSelector(store => store.poems);
    const com = useSelector(store => store.combined)

           

    const dispatch = useDispatch()

    const deleteComment = (event, id) => {
        event.preventDefault()
        event.stopPropagation();
        dispatch({ type: "DELETE_POEM", payload: { id } })


    };

    const handleLikes = (id) => {
        event.preventDefault()
        dispatch({ type: "ADD_LIKE", payload: { id } })

    }





    return (
        <TableContainer>
        <Table variant="simple">
          <TableCaption>Poems and Likes</TableCaption>
          <Thead>
            <Tr>
              <Th>Poem</Th>
              <Th>Likes</Th>
              <Th>Image</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {poems.map((poem, index) => (
              <Tr key={index}>
                <Td>{poem.poems}</Td>
                <Td>{poem.likes}</Td>
                <Td>
                  {poem.image_id && (
                    <img
                      src={images.find(img => img.id === poem.image_id)?.url}
                      alt="Poem Image"
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </Td>
                <Td>
                  <button onClick={() => handleLikes(poem.id)}>
                    <FavoriteIcon />
                  </button>
                  <button onClick={(event) => deleteComment(event, poem.id)}>
                    <DeleteIcon />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    );
   
}

export default CommentMapping