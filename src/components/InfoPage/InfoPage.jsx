import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Image } from 'primereact/image';
import PanoramaIcon from '@mui/icons-material/Panorama';

const InfoPage = () => {
  const images = useSelector(store => store.images);
  const dispatch = useDispatch();
  const history = useHistory();
  const fav = useSelector(store => store.favorites)
  const user = useSelector(store => store.user); 

  const handleImageClick = (imageId) => {
    history.push(`/images/${imageId}`);
  };

  const handleDelete = (id,event) => {
    event.stopPropagation();
    dispatch({type: "DELETE_IMAGE", payload: id})
  };

  const handleFav = (img) => {
    dispatch({type: "ADD_FAV_REQUEST", payload: {imageId: img.id , userID: user.id}  })

  }

  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    }}>
      {images.map((img) => (
        <div
          key={img.id}
          style={{ cursor: 'pointer', maxWidth: '345px', margin: '10px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}
          
        >
          <Image src={img.url} alt={`Image ${img.id}`} width="250" preview />
          <div style={{ padding: '10px' }}>
            <h3>{`Image ${img.id}`}</h3>
            <p>{img.description}</p>
            <button onClick={() => handleImageClick(img.id)}><PanoramaIcon/></button>
            <button onClick={()=> handleFav(img)}>add to fav</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoPage;
