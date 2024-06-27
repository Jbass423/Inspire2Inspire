import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const CommentMapping = () => {
    const users = (store => store.user)
    const poems = useSelector(store => store.poems);
     
    
    const dispatch = useDispatch()

    const handleToggleComment = (id) => {
        console.log("checking poem id", id);
        dispatch({type: "DELETE_POEM", payload: {id}} )
       
        
    };

   



    return (
        <ul>
        {poems.map((poem, index) => (
          <li key={index}>
             {poem.poems}
              <button onClick={() => handleToggleComment( poem.id)}>Change Poem</button>
               </li>
        ))}
      </ul>
    );
}

export default CommentMapping