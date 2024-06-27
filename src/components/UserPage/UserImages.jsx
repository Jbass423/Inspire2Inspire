import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CommentSection from '../CommentSection/CommentSection';
import axios from 'axios';


const UserImages = ()=> { 
    const dispatch = useDispatch()
    const images = useSelector(store => store.images)
    const user = useSelector((store) => store.user);
console.log("checking data in images id store" , images);
      
        
        const handleLikes = ()=>{ 
            dispatch( "ADD_LIKE",  action.payload )

        }
 

const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/images/${id}`);
      dispatch({ type: "DELETE_IMAGE", payload: { id } });
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

      const userImages = images.filter((pic) => pic.user_id === user.id);

      return (

        <ul>
            {userImages.map((pic, index) => (
              <li key={index}>
                <img src={pic.url} alt={`Image ${index}`} />
               
               <button key={pic.delete} onClick={()=> handleDelete( pic.id) } >DELETE</button>
                <CommentSection />
              </li>
            ))}
          </ul>

      )
}

export default UserImages