import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const CommentMapping = () => {
    const users = (store => store.user)
    const images = useSelector(store => store.images)
    const poems = useSelector(store => store.poems);


    const dispatch = useDispatch()

    const deleteComment = (event,id) => {
       event.preventDefault()
        event.stopPropagation();
        dispatch({ type: "DELETE_POEM", payload: { id } })


    };

    const handleLikes = ( id ) => {
        event.preventDefault()
        dispatch({ type: "ADD_LIKE", payload: { id } })
       
    }





    return (
        <ul>
            {poems.map((poem, index) => (
                <li key={index}>
                    {poem.poems}
                    <p>Likes: {poem.likes}</p>
                    {poem.image_id && (
                        <img src={images.find(img => img.id === poem.image_id)?.url} alt="Poem Image" />
                    )}
                    <button onClick={() => handleLikes(poem.id)}>Like</button>
                    <button onClick={(event) => deleteComment(event,  poem.id)}>Change Poem</button>
                </li>
            ))}
        </ul>
    );
}

export default CommentMapping