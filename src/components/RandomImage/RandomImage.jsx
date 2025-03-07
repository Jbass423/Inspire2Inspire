import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const RandomImage = () => {
  const dispatch = useDispatch();
  const images = useSelector(store => store.images);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGES' });
  }, [dispatch]);

  const handleRandom = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomId = images[randomIndex].id;
      const currentPath = `/images/${randomId}`;
  
      
      if (history.location.pathname !== currentPath) {
        history.push(currentPath);
      } else {
       
        console.log("Already on this path");
      }
    }
  };

  return (
    <button onClick={handleRandom} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
        <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
      </svg>
   
    </button>
  );
};

export default RandomImage;
