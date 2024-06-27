const poems = (state= [], action) =>{
    switch (action.type){
        case "SET_POEMS":
            return action.payload;
        case "ADD_POEM":
            return [...state, action.payload];
        case "UPDATE_POEM":
            return [...state, action.payload] ;
        case "DELETE_POEM":
            return  state.filter(poems => poems.id !== action.payload.id);        
        default:
             return state    
    }
}

export default poems 