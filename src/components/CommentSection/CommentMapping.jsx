import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


const CommentMapping = () => {
    const users = (store => store.user)
    const poems = useSelector(store => store.poems);
    const [newPoem, setNewPoem] = useState(""); 
    const [edit , setEdit] = useState(-1)
    const dispatch = useDispatch()

    const handleToggleComment = (index,id) => {
        dispatch({type: "DELETE_POEM", payload: {id}} )
        setEdit(index)
        setNewPoem(poems[index].poems) 
    };

    const handleChange = (id)=>{
        dispatch({type:"UPDATE_POEM", payload: {id,users_id: users.id, poems: newPoem}})
        
        setEdit(-1)
    }



    return (
        <ul>
        {poems.map((poem, index) => (
          <li key={index}>
            {edit === index ? (
              <div>
                <input
                  type="text"
                  value={newPoem}
                  onChange={(e) => setNewPoem(e.target.value)}
                  placeholder="Edit poem"
                />
                <button onClick={() => handleChange(poem.id)}>Save</button>
              </div>
            ) : (
              <div>
                {poem.poems}
                <button onClick={() => handleToggleComment(index, poem.id)}>Change Poem</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
}

export default CommentMapping