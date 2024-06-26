const poems = (state= [], action) =>{
    switch (action.type){
        case "SET_POEMS":
            return action.payload;
        default:
             return state    
    }
}

export default poems 