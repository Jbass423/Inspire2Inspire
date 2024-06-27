const poems = (state= [], action) =>{
    switch (action.type){
        case "SET_POEMS":
            return action.payload;
        case "ADD_POEM":
            return [...state, action.payload];
        case "UPDATE_POEM":
            return [...state, action.payload] ;
        case "DELETE_POEM":
            return  state.filter(poem => poem.id !== action.payload.id);   
        case  "ADD_LIKE":
                return state.map(poem => 
                    poem.id === action.payload.id ? { ...poem, likes: poem.likes + 1 } : poem
                );        
        default:
             return state    
    }
}

export default poems 