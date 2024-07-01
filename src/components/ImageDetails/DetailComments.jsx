import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CommentSection from "../CommentSection/CommentSection";
import CommentMapping from "../CommentSection/CommentMapping";

const DetailComments = ({imageId})=>{
    const dispatch = useDispatch()
    const combine = useSelector(store => store.combined)
    console.log("checking", combine)
    
    
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
        <p>No comments for this image</p>
      ) : (
        filteredComments.map(comment => (
          <div key={comment.id}>
            <p>{comment.poems}</p>
          </div>
        ))
      )}
      <CommentSection imageId={imageId} />
    </div>
);
};

export default DetailComments;