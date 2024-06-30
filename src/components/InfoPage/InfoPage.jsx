import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const InfoPage = () => {
  const images = useSelector(store => store.images);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleImageClick = (imageId) => {
    history.push(`/images/${imageId}`);
  };

  const handleDelete = async (id) => {
    dispatch({type: "DELETE_IMAGE", payload: id})
  };

  return (
    <div style={{
      background: 'rgb(0,36,33)',
      background: 'linear-gradient(90deg, rgba(0,36,33,1) 0%, rgba(9,121,25,1) 35%, rgba(0,153,255,1) 100%)',
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
          onClick={() => handleImageClick(img.id)}
        >
          <img src={img.url} alt={`Image ${img.id}`} style={{ width: '100%', height: 'auto' }} />
          <div style={{ padding: '10px' }}>
            <h3>{`Image ${img.id}`}</h3>
            <p>{img.description}</p>
            <button onClick={(e) => { e.stopPropagation(); handleDelete(img.id); }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoPage;
