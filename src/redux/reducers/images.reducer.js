const images = (state=[], action) =>{
    switch (action.type){
        case "SET_IMAGES":
            return action.payload;
        case "SEND_IMAGE":
            return [...state, action.payload]; 
        case "DELETE_IMAGE":
            return state.filter(image => image.id !== action.payload);    
            default:
            return state 
    }
        

}
export default images 