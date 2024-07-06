import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EditForm(id) {

  const dispatch = useDispatch();
  const history = useHistory();
  const editPoems = useSelector((store) => store.editPoem);
  console.log("checking editPoems", editPoems)
  

  function handleChange(event) {
    dispatch({ 
                type: 'EDIT_ONCHANGE', 
                payload: { property: 'poem', value: event.target.value }
            });

  }

        
  function handleSubmit(event) {
    event.preventDefault();

   
    axios.put(`/api/poems/${editPoems.id}`, {poem: editPoems.poem })
        .then( response => {
                      
            dispatch({ type: 'EDIT_CLEAR' });

            history.push('/'); 
        })
        .catch(error => {
            console.log('error on PUT: ', error);
        })
    
  };


  return (
    <>
      <h2>Edit Poem</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => handleChange(event )}
          placeholder='change your poem '
          value={editPoems.poem}
          
        />
        <input type='submit' value='Update Poem' />
      </form>
    </>
  );
}

export default EditForm;