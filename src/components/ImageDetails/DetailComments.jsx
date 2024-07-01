import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentMapping from "../CommentSection/CommentMapping";

const DetailComments = ({imageId})=>{
    const dispatch = useDispatch()
    const combine = useSelector(store => store.combined)
    
    
    useEffect(() => {
        if (imageId) {
          dispatch({ type: 'FETCH_POEMS_BY_IMAGE_ID', payload: imageId });
        }
      }, [dispatch, imageId]);

      const filteredComments = combine.filter(comment => Number(comment.image_id) === Number(imageId));


return (
  <div>
    <h3>Comments</h3>
    {filteredComments.length === 0 ? (
      <p>y you no work</p>
    ) : (
      filteredComments.map(comment => (
        <CommentMapping key={comment.image_id} comment={comment} />
        
      ))
    )}
     <CommentSection imageId={imageId} />
  </div>
);
};

export default DetailComments;