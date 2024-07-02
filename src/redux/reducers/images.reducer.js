const images = (state = [], action) => {
    switch (action.type) {
        case "SET_IMAGES":
            return action.payload;
        case "UPLOAD_DONE":
            return [...state, action.payload]; 
        case "DELETE_IMAGE":
            return state.filter(image => image.id !== action.payload);   
        default:
            return state;
    }
};

export default images;