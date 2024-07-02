const combined = (state = [], action) => {
    switch (action.type) {
        case "SET_COMBINED":
            return action.payload;
        case "DELETE_POEM":
            return state.filter(poem => poem.id !== action.payload)
        case "ADD_LIKE":
            return state.map(poem=>{
                if (poem.id === action.payload.id){
                    return {...poem, likes: poem.likes +1 }
                }
                return poem
            })
        default:
            return state
    }
}

export default combined 


