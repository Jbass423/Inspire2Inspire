const images = (state=[], action) =>{
    switch (action.type){
        case "SET_IMAGES":
            return action.payload;
        case "SEND_IMAGE":
            return [...state, action.payload];    
            default:
            return state 
    }
        

}
export default images 